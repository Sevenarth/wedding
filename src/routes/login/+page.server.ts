import { SECRET_TURNSTILE_KEY as SECRET_KEY } from "$env/static/private";
import { fail } from "@sveltejs/kit";
import type { Action } from "./$types.js";

interface TokenValidationResponse {
	success: boolean;
    hostname: string;
    cdata: string;
    action: string;
	'error-codes': string[];
}

const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

async function validateToken(request: Request, token: FormDataEntryValue): Promise<TokenValidationResponse> {
    const formData = new FormData();
    formData.append("secret", SECRET_KEY);
    formData.append("response", token);
    formData.append("remoteip", request.headers.get("CF-Connecting-IP") || "");
    console.log(formData)

	const validationRequest = await fetch(TURNSTILE_VERIFY_URL, {
        method: 'POST',
        body: formData,
	});
    
    return validationRequest.json<TokenValidationResponse>();
}

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
        const name = data.get("name");
        const accessCode = data.get("access-code");
		const token = data.get("cf-turnstile-response");

        if (!token)
            return fail(400, { name, error: "missing-captcha" });

		const { success, "error-codes": errorCodes } = await validateToken(request, token);
        console.log(success, errorCodes)

		if (!success)
			return fail(400, {
                name,
				error: errorCodes.at(0) ?? "invalid-captcha",
			});

        return { success: true };
	},
} satisfies Action;