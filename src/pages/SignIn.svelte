<script>
  import { http } from "@/lib/http";
  import { sessionSet } from "@/lib/common";
  import { navigateTo } from "svelte-router-spa";

  let email = "app235@naver.com";
  let password = "5309wodnjsQQ!!";
  let provider = "waynehills";

  const login = async () => {
    http
      .post("/ttv/api/login", {
        email,
        password,
        provider,
      })
      .then((res) => {
        if (res.data.statusCode === 200) {
          Object.keys(res.data).map((key) => {
            sessionSet(key, res.data[key]);
          });

          navigateTo("ttv");
        } else {
          alert("아이뒤 비밀번호 확인");
        }
      });
  };
</script>

<div>로그인 페이지</div>
<input type="text" bind:value={email} />
<input type="text" bind:value={password} />
<button on:click={login}>로그인</button>
