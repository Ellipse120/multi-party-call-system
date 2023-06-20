<script setup>
import logoUrl from "@/assets/imgs/logo.png";

const logo = ref(logoUrl);
const corporation = useAppConfig().corporation;
const { doLogout } = useAuth();
</script>

<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar class="shadow-2">
      <q-avatar>
        <img :src="logo" />
      </q-avatar>

      <q-toolbar-title>{{ corporation }}</q-toolbar-title>

      <q-btn icon="mdi-minus" flat></q-btn>

      <q-btn icon="mdi-window-maximize" flat></q-btn>

      <q-btn icon="mdi-close-circle" flat></q-btn>

      <q-btn icon="mdi-logout" flat @click="doLogout()"></q-btn>
    </q-toolbar>
  </q-header>
</template>
