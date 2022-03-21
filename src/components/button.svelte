<script lang="ts">
import { createEventDispatcher } from 'svelte';

export let size: 'large' | 'middle' | 'small' = 'middle';
export let variant: 'text' | 'contained' | 'outlined' = 'contained';
export let href: string = '';
export let className: string = '';
export let disabled: boolean = false;

const dispatch = createEventDispatcher();

function onClick(e: Event) {
    dispatch('click', { e });
}

$: initalClass = 'rounded-[10px] text-text1 select-none';
$: disabledClass = disabled ? 'disabled:bg-disabled' : '';
$: variantClass =
    variant === 'outlined'
        ? 'border-solid border-brand3 border hover:bg-brand3'
        : '' + variant === 'contained'
        ? 'bg-brand3 hover:bg-opacity-90'
        : '' + variant === 'text'
        ? 'hover:bg-brand3 hover:bg-opacity-30'
        : '';
$: sizeClass =
    size === 'large'
        ? 'w-64 h-16'
        : '' + size === 'middle'
        ? 'w-80 h-12'
        : '' + size === 'small'
        ? 'w-28 h-9'
        : '';
</script>

{#if !href}
    <button
        on:click="{onClick}"
        class="{disabledClass} {variantClass} {className} {initalClass} {sizeClass}"
        disabled="{disabled}"
    >
        <slot />
    </button>
{:else}
    <a
        href="{href}"
        class="{variantClass} {className} {initalClass} {sizeClass}"
        disabled="{disabled}"
    >
        <slot />
    </a>
{/if}
