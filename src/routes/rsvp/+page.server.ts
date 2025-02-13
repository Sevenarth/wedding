import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import prisma from "$lib/prisma.server";
import { requireUser } from '$lib/auth.server';

export const load: PageServerLoad = async ({ locals, platform, url }) => {
	const user = requireUser(locals, url)
	
	const responses = await prisma(platform).response.findMany({
		where: {
			inviteId: user.invite.id
		},
		include: {
			persons: true
		}
	})

	return { user, responses }
};
