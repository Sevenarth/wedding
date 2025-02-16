import { env } from "$env/dynamic/private";
import type { BankDetails } from "$lib/utils";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ parent }) => {
    // perform user authentication first
	await parent();

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

	return { bankDetails }
};