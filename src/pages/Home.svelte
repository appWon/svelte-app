<script lang="ts">
import { navigateTo } from 'svelte-router-spa';

const onClickSignIn = () => {
    navigateTo('signin');
};
</script>

<div class="flex flex-col">
    <video autoplay muted loop class="fixed min-w-full min-h-full inset-0 object-cover bg-black">
        <source src="https://ttv.waynehills.co/assets/bg.mp4" type="video/mp4" />
    </video>
    <div class="z-10">
        <div class="flex justify-between px-14">
            <img
                class="h-7 my-8"
                src="https://ttv.waynehills.co/assets/image/home/i_logo_head.png"
                alt="waynehills-logo"
            />
            <div class="flex items-center">
                <button class="text-lg text-main mr-10">회원가입</button>
                <button
                    class="flex justify-center items-center text-lg text-main bg-brand3 h-11 w-36 rounded-[32px]"
                    on:click="{onClickSignIn}"
                >
                    로그인
                    <img
                        class="w-7 translate-x-2"
                        src="https://ttv.waynehills.co/assets/image/home/i_profile_w.png"
                        alt="signin-img"
                    />
                </button>
            </div>
        </div>
    </div>
</div>
