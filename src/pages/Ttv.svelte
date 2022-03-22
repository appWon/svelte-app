<script lang="ts">
import Button from '../components/button.svelte';

let script: string = '';

function onSubmit(e: any) {
    console.log(e.target);
}
</script>

<div class="flex bg-gray1 h-screen">
    <form on:submit|preventDefault="{onSubmit}">
        <Button size="small">영상 변환</Button>
        <textarea class="bg-gray2 text-text3" cols="30" rows="10" bind:value="{script}"></textarea>
    </form>
</div>
