import { requireUser } from "$lib/auth.server";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals, url }) => {
	const user = requireUser(locals, url);
	return { user };
};