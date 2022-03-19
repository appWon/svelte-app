<script>
  import { onMount } from "svelte";
  import { http } from "@/lib/http";

  onMount(async () => {
    http.post("/ttv/app/lo");
  });
</script>
