<template>
  <OfficerContact />
</template>

<script>
import { defineComponent, ref } from "vue";
import OfficerContact from "src/components/officerContact.vue";

export default defineComponent({
  name: "contactOfficers",
  components: {
    OfficerContact,
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
