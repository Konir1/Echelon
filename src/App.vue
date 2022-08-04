<template>
  <router-view />
</template>

<style>
@font-face {
  font-family: "MachineStd";
  src: local("MachineStd"), url(./fonts/MachineStd.otf) format("opentype");
}
</style>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
