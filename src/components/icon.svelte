<script lang="ts">
export let width: number = 30;
export let height: number = 30;
export let d: string = '';
export let color: string = 'white';
</script>

<svg
    class="icon"
    width="{width}"
    height="{height}"
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg"
>
    <path d="{d}" fill="{color}" transform="translate(6 4)"> </path>
</svg>
