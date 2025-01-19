import { SECRET_TURNSTILE_KEY as SECRET_KEY } from "$env/static/private";
import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types.js";
import * as m from "$paraglide/messages";

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
    formData.append("secret", SECRET_KEY);
    formData.append("response", token);
    formData.append("remoteip", request.headers.get("CF-Connecting-IP") || "");
    console.log(formData)

	const validationRequest = await fetch(TURNSTILE_VERIFY_URL, {
        method: 'POST',
        body: formData,
	});
    
    return validationRequest.json<TokenValidationResponse>().then(
        ({success, "error-codes": errorCodes}) => ({success, error: errorCodes.at(0)}
    ));
}

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
        const name = data.get("name");
        const accessCode = data.get("access-code");
		const token = data.get("cf-turnstile-response");
        console.log(name, data)

        if (!token)
            return fail(400, { name, error: `${m.whole_due_skunk_tap()} missing-captcha` });

		const { success, error } = await validateToken(request, token);
		if (!success) {
			return fail(400, { name, error: `${m.whole_due_skunk_tap()} ${error} `});
        }

        return fail(400, { name, error: `${m.whole_due_skunk_tap()} work in progress`});

        if (name && accessCode) {
            return { success: true };
        }
	},
} satisfies Actions;