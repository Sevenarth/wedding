<script lang="ts">
	import type { Snippet } from "svelte";
	import type { MouseEventHandler } from "svelte/elements";

    interface Props {
		target?: string;
        children: Snippet;
        [attr: string]: unknown;
	}

    const { target = "", children, ...anchorProps }: Props = $props();

    const onclick: MouseEventHandler<HTMLAnchorElement> = ({target}: MouseEvent) => {
        if(target) {
            const el = document.querySelector((target as HTMLAnchorElement).href);
            if (!el) {
                console.error(`${target} pointing at an inexisting anchor`);
            }

            el?.scrollIntoView();
        }
    }
</script>

<a href={`/#${target}`} aria-label={`Link to #${target}`} {onclick} {...anchorProps}>{@render children()}</a>