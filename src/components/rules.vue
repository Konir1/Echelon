<template>
  <div class="q-pa-md q-gutter-sm">
    <q-img src="../assets/EHCMAN.png" spinner-color="white" class="logo" />
  </div>
  <div class="q-pa-md bg-primary text-center fixed-center rules">
    <q-list
      dark
      bordered
      separator
      style="max-width: 780px"
      class="text-secondary"
    >
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>Rule 1 of Fight Club</q-item-label>
          <q-item-label>Must be 18 years old or older</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>Rule 2 of Fight Club</q-item-label>
          <q-item-label
            >Be willing to work in a team environment and respecting the chain
            of command</q-item-label
          >
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>Rule 3 of Fight Club</q-item-label>
          <q-item-label
            >Colonial players only, with no future intentions of playing
            Warden</q-item-label
          >
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>Rule 4 of Fight Club</q-item-label>
          <q-item-label
            >Must not be part of another clan. Echelon does not permit double
            clanning amongst its members</q-item-label
          >
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>Rule 5 of Fight Club</q-item-label>
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
  height: 250px;
  max-width: 250px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@media only screen and (max-width: 600px) {
  .logo {
    height: 170px;
    max-width: 170px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .rules {
    width: 100%;
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
