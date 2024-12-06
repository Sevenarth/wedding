import { browser } from '$app/environment'
import { setLanguageTag, type AvailableLanguageTag } from '$paraglide/runtime'

export const load = async () => {
	if (browser) {
		setLanguageTag(document.documentElement.lang as AvailableLanguageTag)
	}
}