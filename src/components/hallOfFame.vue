<template>
  <div class="q-pa-md hall-of-fame">
    <q-card
      class="my-card bg-primary"
      flat
      bordered
      v-for="hero in this.winners"
      :key="hero"
    >
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline text-secondary">{{ hero.name }}</div>
          <div class="text-h5 q-mt-sm q-mb-xs text-bold" style="color: #daa520">
            {{ hero.winner }}
          </div>
          <div class="text-caption text-grey">
            {{ hero.description }}
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/US_Medal_of_Honor_%28Air_Force%29.svg/460px-US_Medal_of_Honor_%28Air_Force%29.svg.png"
          />
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>
<style>
.hall-of-fame {
  display: grid;
  grid-template-columns: 350px 350px 350px;
  grid-gap: 25px;

  justify-content: center;
  align-items: center;
}

.my-card {
  width: 100%;
  height: 100%;
  max-width: 350px;
  border-radius: 5px;
  padding: 20px;
}
@media only screen and (max-width: 600px) {
  .hall-of-fame {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
<script>
import { defineComponent, ref } from "vue";
import hallOfFamers from "../assets/awards.json";

export default defineComponent({
  name: "hallOfFame",
  setup() {
    return {
      winners: ref(hallOfFamers.awards),
    };
  },
});
</script>
