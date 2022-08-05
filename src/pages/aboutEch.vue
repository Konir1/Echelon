<template>
  <About />
</template>

<script>
import { defineComponent, ref } from "vue";
import About from "src/components/about.vue";

export default defineComponent({
  name: "aboutPage",
  components: {
    About,
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
