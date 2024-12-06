import type { Handle } from "@sveltejs/kit";
import { setLanguageTag, sourceLanguageTag, type AvailableLanguageTag } from "$paraglide/runtime";

const hostnamesToLocale: Record<string, AvailableLanguageTag> = {
    "wedding.vizzar.ro": "en",
    "sposi.vizzar.ro": "it",
    "nunta.vizzar.ro": "ro"
};

export const handle: Handle = async ({ event, resolve }) => {
    const hostname = event.url.hostname;
    const locale = hostnamesToLocale[hostname] ?? sourceLanguageTag;

    setLanguageTag(locale);

    return resolve(event, {
        transformPageChunk: ({ html }) => html.replace('%lang%', locale)
    });
}