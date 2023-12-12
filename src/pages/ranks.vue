<template>
  <Ranks />
</template>

<script>
import { defineComponent, ref } from "vue";
import Ranks from "src/components/ranks.vue";

export default defineComponent({
  name: "ranksPage",
  components: {
    Ranks,
  },
  setup() {
    return {
      slide: ref("first"),
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    };
  },
});
</script>
