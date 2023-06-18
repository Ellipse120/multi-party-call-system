<script setup>
import logoUrl from "@/assets/imgs/logo.png";

const logo = ref(logoUrl);
const userInfo = ref({
  name: "张斌",
  id: "6282329",
});

const { doLogout } = useAuth();
</script>

<template>
  <v-app-bar :elevation="4" color="primary">
    <template v-slot:prepend>
      <v-list-item
        :prepend-avatar="logo"
        :title="userInfo.name"
        :subtitle="`ID: ${userInfo.id}`"
      >
      </v-list-item>
    </template>

    <template v-slot:append>
      <v-btn icon="mdi-minus"></v-btn>

      <v-btn icon="mdi-window-maximize"></v-btn>

      <v-btn icon="mdi-close-circle"></v-btn>

      <v-btn icon="mdi-logout" @click="doLogout()"></v-btn>
    </template>
  </v-app-bar>
</template>

<style>
body {
  font-family: 微软雅黑, Urbanist, sans-serif;
  @apply bg-white dark:bg-gray-900;
}

.navbar-active .hamburger div:first-child {
  @apply rotate-45 translate-y-1.5;
}
.navbar-active .hamburger div:last-child {
  @apply -rotate-45 -translate-y-1;
}
.navbar-active div:first-child div:first-child div:last-child {
  @apply block lg:flex;
}
</style>
