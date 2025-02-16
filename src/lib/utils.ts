import { languageTag } from "$paraglide/runtime";

export interface BankDetails {
    gbpBankName: string;
    gbpBeneficiary: string;
    gbpSortCode: string;
    gbpAccountNumber: string;
    eurBankName: string;
    eurBeneficiary: string;
    eurIban: string;
    lucaRevtag: string;
    sarahRevtag: string;
}

export function intlPhoneNumber(phoneNumber: string | null): string | null {
    if (!phoneNumber)
        return null;

    if (phoneNumber.startsWith('+'))
        return phoneNumber;

    if (phoneNumber.startsWith('00'))
        return `+${phoneNumber.slice(2)}`;

    switch (languageTag()) {
        case 'en':
            if (phoneNumber.startsWith('0'))
                phoneNumber = phoneNumber.slice(1);
            return `+44${phoneNumber}`;
        case 'it':
            return `+39${phoneNumber}`;
        case 'ro':
            if (!phoneNumber.startsWith('0'))
                return `+40${phoneNumber}`;
            return `+4${phoneNumber}`;
    }
}

export function localPhoneNumber(phoneNumber: string | null): string {
    if (!phoneNumber)
        return '';

    const prefix = phoneNumber.substring(0, 3);
    const locale = languageTag();
    if (locale === 'en' && prefix === '+44')
        return `0${phoneNumber.slice(3)}`;
    else if(locale === 'it' && prefix === '+39')
        return phoneNumber.slice(3);
    else if(locale === 'ro' && prefix === '+40')
        return phoneNumber.slice(2);
    return phoneNumber;
}