<template>
  <div class="currentWar text-secondary text-bold">
    {{ this.currentWar }}
  </div>
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
          <q-img loading="lazy" class="rounded-borders" :src="medal" />
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
.currentWar {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  font-family: "MachineStd";
  -webkit-text-stroke: 0.8px #090c06;
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
import medal from "../assets/medal.png";

export default defineComponent({
  name: "hallOfFame",
  setup() {
    return {
      winners: ref(hallOfFamers.awards),
      currentWar: ref(hallOfFamers.currentWar),
      medal,
    };
  },
});
</script>
