<template>
  <div class="q-pa-md bg-primary text-center fixed-center">
    <q-list
      dark
      bordered
      separator
      style="max-width: 780px"
      class="text-secondary"
    >
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>What are we?</q-item-label>
          <q-item-label
            >Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
            yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin
            grog yardarm hempen halter furl. Swab barque interloper chantey
            doubloon starboard grog black jack gangway rutters.</q-item-label
          >
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>Who are we?</q-item-label>
          <q-item-label
            >Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
            yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin
            grog yardarm hempen halter furl. Swab barque interloper chantey
            doubloon starboard grog black jack gangway rutters.</q-item-label
          >
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>Do we game?</q-item-label>
          <q-item-label
            >Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
            yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin
            grog yardarm hempen halter furl. Swab barque interloper chantey
            doubloon starboard grog black jack gangway rutters.</q-item-label
          >
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>Are we LGBT?</q-item-label>
          <q-item-label
            >Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
            yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin
            grog yardarm hempen halter furl. Swab barque interloper chantey
            doubloon starboard grog black jack gangway rutters.</q-item-label
          >
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<style lang="sass" scoped></style>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "aboutCard",
  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
});
</script>
