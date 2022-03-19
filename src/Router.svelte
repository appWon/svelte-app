<script>
  import { Router } from "svelte-router-spa";

  import Ttv from "@/pages/Ttv.svelte";
  import Home from "@/pages/Home.svelte";
  import SignIn from "@/pages/SignIn.svelte";

  const routes = [
    { name: "/", component: Home },
    { name: "/ttv", component: Ttv },
    { name: "/signin", component: SignIn },
  ];
</script>

<Router {routes} />
