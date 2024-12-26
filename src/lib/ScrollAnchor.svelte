<script lang="ts">
	import type { Snippet } from "svelte";
	import type { MouseEventHandler } from "svelte/elements";

    interface Props {
		target?: string;
        children: Snippet;
        [attr: string]: unknown;
	}

    const { target = "", children, ...anchorProps }: Props = $props();

    const onclick: MouseEventHandler<HTMLAnchorElement> = (e) => {
        e.preventDefault();
        const targetAnchor = e.currentTarget.dataset.target;
        console.log(targetAnchor);
        if(targetAnchor) {
            const el = document.getElementById(targetAnchor);
            if (!el) {
                console.error(`${target} pointing at an inexisting anchor`);
            }

            el?.scrollIntoView();
        } else {
            document.querySelector("body")?.scrollTo(0, 0);
        }
    }
</script>

<a {...anchorProps} href={`#${target}`} data-target={target} aria-label={`Link to #${target}`} {onclick}>
    {@render children()}
</a>