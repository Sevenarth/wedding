import type { Handle } from "@sveltejs/kit";
import { setLanguageTag, sourceLanguageTag, type AvailableLanguageTag } from "$paraglide/runtime";
import { getUser } from "$lib/auth.server";

const hostnamesToLocale: Record<string, AvailableLanguageTag> = {
    "wedding.vizzar.ro": "en",
    "sposi.vizzar.ro": "it",
    "nunta.vizzar.ro": "ro"
};

export const handle: Handle = async ({ event, resolve }) => {
    const hostname = event.url.hostname;
    const locale = hostnamesToLocale[hostname] ?? sourceLanguageTag;

    setLanguageTag(locale);

    event.locals.user = await getUser(event.cookies, event.platform)

    return resolve(event, {
        transformPageChunk: ({ html }) => html.replace('%lang%', locale),
    });
}