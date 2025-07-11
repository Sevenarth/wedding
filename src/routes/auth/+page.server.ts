import { env } from "$env/dynamic/private";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import * as m from "$lib/paraglide/messages";
import prisma from "$lib/prisma.server";
import { authenticateUser } from "$lib/auth.server";

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) {
		redirect(307, '/rsvp');
	}
};

interface TokenValidationResponse {
	success: boolean;
    hostname: string;
    cdata: string;
    action: string;
	'error-codes': string[];
}

const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

async function validateToken(request: Request, token: FormDataEntryValue): Promise<{success: boolean, error: string | undefined}> {
    const formData = new FormData();
    formData.append("secret", env.SECRET_TURNSTILE_KEY ?? "");
    formData.append("response", token);
    formData.append("remoteip", request.headers.get("CF-Connecting-IP") || "");

	const validationRequest = await fetch(TURNSTILE_VERIFY_URL, {
        method: 'POST',
        body: formData,
	});
    
    return validationRequest.json<TokenValidationResponse>().then(
        ({success, "error-codes": errorCodes}) => ({success, error: errorCodes.at(0)}
    ));
}

export const actions = {
	default: async ({ request, platform, cookies, url }) => {
        const fromPath = url.searchParams.get("from")
        const referer = request.headers.get("referer");
        if (fromPath && referer) {
            const refererUrl = new URL(referer);
            if (refererUrl.pathname !== url.pathname)
                return
        }

		const data = await request.formData();
        const name = data.get("name")?.toString().trim();
        const accessCode = data.get("access-code")?.toString().trim();
		const token = data.get("cf-turnstile-response");

        if (!token)
            return fail(400, { name, error: `${m.whole_due_skunk_tap()} missing-captcha` });

		const { success, error } = await validateToken(request, token);
		if (!success) {
			return fail(400, { name, error: `${m.whole_due_skunk_tap()} ${error} `});
        }

        if (name && accessCode) {
            const user = await prisma(platform).login.findUnique({
                where: {
                    accessCode_name: {
                        accessCode: accessCode.replace(" ", "").toLowerCase(),
                        name: name.toLowerCase()
                    }
                }
            });

            if (user) {
                await authenticateUser(user.displayName ?? user.name, user.inviteId, cookies)
                if (fromPath && fromPath.startsWith("/")) {
                    redirect(303, fromPath);
                }

		        redirect(303, '/rsvp');
            }
        }

        return fail(400, { name, error: m.free_agent_florian_heal()});
	},
} satisfies Actions;