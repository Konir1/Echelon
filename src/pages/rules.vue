<template>
  <Rules />
</template>

<script>
import { defineComponent, ref } from "vue";
import Rules from "src/components/rules.vue";

export default defineComponent({
  name: "rulePage",
  components: {
    Rules,
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
