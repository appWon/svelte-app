<script>
import { post, get } from '@/lib/http';
import { sessionSet } from '@/lib/common';
import { navigateTo } from 'svelte-router-spa';
import { onMount } from 'svelte';

let email = 'app235@naver.com';
let password = '5309wodnjsQQ!!';
let provider = 'waynehills';

onMount(() => {
    get('/ttv/api/token/issue/access').subscribe({
        next: () => navigateTo('/'),
    });
});

const login = () => {
    post('/ttv/api/login', {
        email,
        password,
        provider,
    }).subscribe({
        next: res => {
            if (res.statusCode !== 200) return;

            Object.keys(res).map(key => {
                sessionSet(key, res[key]);
            });

            navigateTo('ttv');
        },
        error: err => console.log(err),
    });
};
</script>

<div>로그인 페이지</div>
<input type="text" bind:value="{email}" />
<input type="text" bind:value="{password}" />
<button on:click="{login}">로그인</button>
