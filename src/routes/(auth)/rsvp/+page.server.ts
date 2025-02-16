import { fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import prisma from "$lib/prisma.server";
import { requireUser } from '$lib/auth.server';
import { intlPhoneNumber, type BankDetails } from '$lib/utils';
import { Location, ResponseType } from '@prisma/client';
import { env } from "$env/dynamic/private";

export const load: PageServerLoad = async ({ platform, parent }) => {
	const { user } = await parent();
	
	const responses = await prisma(platform).response.findMany({
		where: {
			inviteId: user.invite.id
		},
		include: {
			persons: {
				orderBy: {
					orderIndex: 'asc'
				}
			}
		}
	})

	// oddly need to be fed this way to be protected by login.
	const bankDetails = {
		gbpBankName: env.SECRET_GBP_BANK_NAME,
		gbpBeneficiary: env.SECRET_GBP_BENEFICIARY,
		gbpSortCode: env.SECRET_GBP_SORT_CODE,
		gbpAccountNumber: env.SECRET_GBP_ACCOUNT_NUMBER,
		eurBeneficiary: env.SECRET_EUR_BENEFICIARY,
		eurBankName: env.SECRET_EUR_BANK_NAME,
		eurIban: env.SECRET_EUR_IBAN,
		lucaRevtag: env.SECRET_LUCA_REVTAG,
		sarahRevtag: env.SECRET_SARAH_REVTAG
	} satisfies BankDetails;

	return { user, responses, bankDetails }
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
	},
	rsvp: async ({ request, locals, platform, url }) => {
		const user = requireUser(locals, url);
		const formData = await request.formData();
		const locationKey = formData.get('location')?.toString().trim() ?? '';
		const responseKey = formData.get('response')?.toString() ?? '';
		const guests = formData.get('guests')?.toString().trim();

		if (!(locationKey in Location)) {
			return fail(400, { location: locationKey, error: 'invalid-location' });
		}
		const location = Location[locationKey as keyof typeof Location];

		if (!(responseKey in ResponseType)) {
			return fail(400, { location: locationKey, error: 'invalid-response' });
		}
		const givenResponse = ResponseType[responseKey as keyof typeof ResponseType];

		if (givenResponse !== ResponseType.Declined) {
			if(!guests) {
				return fail(400, { location: locationKey, error: 'missing-guests' });
			}

			const requestedGuestsNum = parseInt(guests);
			const currentGuestsNum = await prisma(platform).person.count({
				where: {
					inviteId: user.invite.id,
					location
				}
			})

			if (currentGuestsNum > requestedGuestsNum) {
				await prisma(platform).person.deleteMany({
					where: {
						inviteId: user.invite.id,
						location,
						orderIndex: {
							gt: requestedGuestsNum - 1
						}
					}
				})
			} else if (currentGuestsNum < requestedGuestsNum) {
				for (let orderIndex = currentGuestsNum; orderIndex < requestedGuestsNum; orderIndex++) {
					await prisma(platform).person.create({
						data: {
							inviteId: user.invite.id,
							location,
							orderIndex,
						}
					})
				}
			}
		}

		const updatedResponse = await prisma(platform).response.update({
			where: {
				inviteId_location: {
					inviteId: user.invite.id,
					location
				}
			},
			data: {
				givenResponse
			},
			include: {
				persons: {
					orderBy: {
						orderIndex: 'asc'
					}
				}
			}
		})

		return { response: updatedResponse };
	}
} satisfies Actions;