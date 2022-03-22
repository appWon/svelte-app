<script lang="ts">
import SvgIcon from '../components/icon.svelte';
</script>

<div class="flex flex-col">
    <video autoplay muted loop class="fixed min-w-full min-h-full inset-0 object-cover bg-black">
        <source src="https://ttv.waynehills.co/assets/bg.mp4" type="video/mp4" />
    </video>
    <div class="z-10">
        <!--  -->

        <SvgIcon
            width="{300}"
            height="{300}"
            d="M8.757 20.016a2.5 2.5 0 0 0 2.5-2.5h-5a2.5 2.5 0 0 0 2.5 2.5zm8.42-5.853c-.755-.812-2.169-2.032-2.169-6.032a6.174 6.174 0 0 0-5-6.066v-.814a1.25 1.25 0 1 0-2.5 0v.815a6.174 6.174 0 0 0-5 6.066c0 4-1.413 5.22-2.169 6.032a1.221 1.221 0 0 0-.339.848 1.252 1.252 0 0 0 1.255 1.251h15a1.252 1.252 0 0 0 1.255-1.251 1.221 1.221 0 0 0-.333-.849z"
        />

        <div class="flex justify-between px-14">
            <img
                class="h-7 my-8"
                src="https://ttv.waynehills.co/assets/image/home/i_logo_head.png"
                alt="waynehills-logo"
            />
            <div class="flex items-center">
                <button class="text-lg text-text1 mr-10">회원가입</button>
                <a
                    href="signin"
                    class="flex justify-center items-center text-lg text-text1 bg-brand3 h-11 w-36 rounded-[32px]"
                >
                    로그인
                    <img
                        class="w-7 translate-x-2"
                        src="https://ttv.waynehills.co/assets/image/home/i_profile_w.png"
                        alt="signin-img"
                    />
                </a>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
.test {
    fill: red;
}
</style>
