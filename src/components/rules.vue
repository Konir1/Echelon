<template>
  <div class="q-pa-md q-gutter-sm flex flex-center">
    <q-img
      src="../assets/EHCMAN.png"
      spinner-color="white"
      class="logo q-ma-md"
    />
  </div>
  <div class="q-pa-md q-ma-md bg-primary text-center fixed-center rules">
    <q-item-label
      style="
        margin-bottom: 10px;
        color: white;
        font-weight: bold;
        font-size: 15px;
      "
      overline
      >Joining Requirements</q-item-label
    >
    <q-list
      dark
      bordered
      separator
      style="max-width: 780px"
      class="text-secondary"
    >
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Must be 18 years old or older</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label
            >Be willing to work in a team environment and respecting the chain
            of command</q-item-label
          >
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label
            >Colonial players only, with no future intentions of playing
            Warden</q-item-label
          >
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label
            >Must not be part of another clan. Echelon does not permit double
            clanning amongst its members</q-item-label
          >
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label
            >A brief Discord interview is required, in which a microphone is
            needed</q-item-label
          >
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<style scoped>
.rules {
  margin-top: 20px;
  display: block;
}
.logo {
  height: 225px;
  max-width: 225px;
  margin-top: 250px;
  display: block;
  position: absolute;
}

@media only screen and (max-width: 600px) {
  .logo {
    height: 160px;
    max-width: 160px;
    display: block;
    margin-top: 165px;
  }
  .rules {
    width: 90%;
    margin: auto;
  }
}
</style>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "joinRules",
  setup() {
    const url = ref();
  },
});
</script>
