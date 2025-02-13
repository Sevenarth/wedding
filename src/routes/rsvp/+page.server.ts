import { type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import prisma from "$lib/prisma.server";
import { requireUser } from '$lib/auth.server';
import { intlPhoneNumber } from '$lib/utils';

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

export const actions = {
	contacts: async ({ request, locals, platform, url }) => {
		const user = requireUser(locals, url);
		const formData = await request.formData();
		const emailAddress = formData.get('emailAddress')?.toString().trim() ?? null;
		const phoneNumber = formData.get('phoneNumber')?.toString().trim() ?? null;
		const invite = await prisma(platform).invite.update({
			where: {
				id: user.invite.id
			},
			data: {
				emailAddress: emailAddress,
				phoneNumber: intlPhoneNumber(phoneNumber)
			},
		});
		return { invite };
	}
} satisfies Actions;