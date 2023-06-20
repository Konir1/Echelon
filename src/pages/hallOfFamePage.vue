<template>
  <hallOfFame />
</template>

<script>
import { defineComponent, ref } from "vue";
import hallOfFame from "src/components/hallOfFame.vue";

export default defineComponent({
  name: "hallOfFamePage",
  components: {
    hallOfFame,
  },
});
</script>
