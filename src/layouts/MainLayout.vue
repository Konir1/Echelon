<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title
          class="neonText text-secondary"
          style="font-family: 'MachineStd'; font-size: 45px"
        >
          <a class="waviy" href="/">
            <span style="--i: 1">E</span>
            <span style="--i: 2">C</span>
            <span style="--i: 3">H</span>
            <span style="--i: 4">E</span>
            <span style="--i: 5">L</span>
            <span style="--i: 6">O</span>
            <span style="--i: 7">N</span>
            <q-avatar style="margin-left: 15px; scale: 140%">
              <img class="logo" src="../assets/ECHLogo.png" />
            </q-avatar>
          </a>
        </q-toolbar-title>

        <div class="secondary_text">Foxhole's Finest Colonials</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      class="bg-primary text-secondary"
    >
      <q-list>
        <q-item-label header class="text-secondary secondary_text">
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      class="bg-transparent text-white text-center mt-5"
      style="opacity: 15%"
    >
      Copyright © {{ currentYear }} Echelon. All Rights Reserved
    </q-footer>
  </q-layout>
</template>

<style>
body {
  background: url("../assets/background.png") center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
}
.secondary_text {
  font-family: monospace;
}

.waviy {
  position: relative;
}
.waviy span {
  position: relative;
  display: inline-block;
  font-size: 40px;
  text-transform: uppercase;
  animation: flip 10s infinite;
  animation-delay: calc(0.2s * var(--i));
}
@keyframes flip {
  0%,
  80% {
    transform: rotateY(360deg);
  }
}

a,
a:visited,
a:hover,
a:active {
  color: inherit;
}
</style>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "About",
    caption: "If you can read this you’re overqualified.",
    icon: "info",
    link: "/about",
  },
  {
    title: "Joining/Rules",
    caption: "Son we need to talk",
    icon: "favorite",
    link: "/rules",
  },
  {
    title: "Officer Contact",
    caption: "Respect our authoritah!",
    icon: "public",
    link: "/contact",
  },
  {
    title: "Discord",
    caption: "Join today!",
    icon: "chat",
    link: "https://discord.com/invite/xy6zBQy",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      currentYear: new Date().getFullYear(),
    };
  },
});
</script>
