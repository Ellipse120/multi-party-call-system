<script setup>
import logoUrl from "@/assets/imgs/logo.png";

const logo = ref(logoUrl);
const corporation = useAppConfig().corporation;
const { doLogout } = useAuth();

const userInfo = ref({
  name: "张斌",
  id: "6282329",
});
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="bg-primary text-white">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img :src="logo" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">{{ userInfo.name }}</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-white text-weight-bold"
                >ID: {{ userInfo.id }}</span
              >
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-space />

        <q-btn flat icon="mdi-minus"></q-btn>

        <q-btn flat icon="mdi-window-maximize"></q-btn>

        <q-btn flat icon="mdi-close-circle"></q-btn>

        <q-btn flat icon="mdi-logout" @click="doLogout()"></q-btn>
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
