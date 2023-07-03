<script setup>
import logoUrl from "@/assets/imgs/logo.png";

const logo = ref(logoUrl);
const corporation = useAppConfig().corporation;
const name = useAppConfig().name;
const { doLogout } = useAuth();
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="shadow-2">
        <q-avatar>
          <img :src="logo" />
        </q-avatar>

        <q-toolbar-title>{{ name }}</q-toolbar-title>

        <q-btn icon="mdi-minus" flat></q-btn>

        <q-btn icon="mdi-window-maximize" flat></q-btn>

        <q-btn icon="mdi-close-circle" flat></q-btn>

        <q-btn icon="mdi-logout" flat @click="doLogout()"></q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <slot />
    </q-page-container>

    <q-footer elevated class="bg-gray-100 text-black">
      <q-toolbar>
        <q-toolbar-title>
          <div class="text-center">{{ corporation }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
