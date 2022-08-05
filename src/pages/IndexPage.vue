<template>
  <carouselVue />

  <QuoteSign />
</template>

<script>
import { defineComponent, ref } from "vue";
import carouselVue from "src/components/carousel.vue";
import QuoteSign from "../components/quoteSign.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    carouselVue,
    QuoteSign,
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
