<script lang="ts">
import { post, get } from '@/lib/http';
import { sessionSet } from '@/lib/common';
import { navigateTo } from 'svelte-router-spa';
import { onMount } from 'svelte';
import Button from '../components/button.svelte';
import { Auth } from '../types';

let email = 'app235@naver.com';
let password = '5309wodnjsQQ!!';
let provider = 'waynehills';

onMount(async () => {
    get('/ttv/api/token/issue/access').subscribe({
        next: () => navigateTo('/'),
    });
});

const login = () => {
    post<Auth>('/ttv/api/login', {
        email,
        password,
        provider,
    }).subscribe({
        next: res => {
            if (res?.statusCode !== 200 || res === null) return;

            Object.keys(res).forEach(key => {
                sessionSet(key, res[key as keyof Auth]);
            });

            navigateTo('ttv');
        },
        error: err => console.log(err),
    });
};
</script>

<div class="flex justify-center h-screen items-center">
    <video autoplay muted loop class="fixed min-w-full min-h-full inset-0 object-cover bg-black">
        <source src="https://ttv.waynehills.co/assets/bg.mp4" type="video/mp4" />
    </video>
    <div class="z-10 w-[440px] h-[660px]">
        <Button variant="contained" on:click="{login}">가나다라</Button>
    </div>
</div>
