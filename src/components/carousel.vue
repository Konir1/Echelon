<template>
  <div class="q-pa-lg content-center" style="width: 95%; margin: auto">
    <q-carousel
      arrows
      animated
      control-color="secondary"
      v-model="slide"
      height="550px"
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide name="first" img-src="~assets/carouselPics/6.png">
        <div class="absolute-bottom custom-caption"></div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="~assets/carouselPics/1.png">
        <div class="absolute-bottom custom-caption"></div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="~assets/carouselPics/4.png">
        <div class="absolute-bottom custom-caption"></div>
      </q-carousel-slide>
      <q-carousel-slide name="fourth" img-src="~assets/carouselPics/2.png">
        <div class="absolute-bottom custom-caption"></div>
      </q-carousel-slide>
      <q-carousel-slide name="fifth" img-src="~assets/carouselPics/3.png">
        <div class="absolute-bottom custom-caption"></div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "carouselWithCard",
  setup() {
    return {
      slide: ref("first"),
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      autoplay: ref(true),
    };
  },
});
</script>
