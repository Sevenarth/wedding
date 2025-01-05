import { onMount } from "svelte";
import type { Action } from "svelte/action";

interface ObserveIntersectionAttributes {
    onviewportenter: (e: CustomEvent) => void;
    onviewportexit: (e: CustomEvent) => void;
};

export type ObserverAction = Action<HTMLElement, undefined, ObserveIntersectionAttributes>

export const makeObserver = (options: IntersectionObserverInit): ObserverAction => {
    let observer: IntersectionObserver | undefined = $state();

    onMount(() => {
        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const event = new CustomEvent(entry.isIntersecting ? "viewportenter" : "viewportexit");
                entry.target.dispatchEvent(event);
            });
        }, options);

        return () => {
            observer?.disconnect();
            observer = undefined;
        }
    });

    return (node) => {
        $effect(() => {
            observer?.observe(node);
            return () => {
                observer?.unobserve(node);
            };
        });
    };
};
