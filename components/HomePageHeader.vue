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
          <span class="text-white text-weight-bold">ID: {{ userInfo.id }}</span>
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-space />

    <q-btn flat icon="mdi-minus"></q-btn>

    <q-btn flat icon="mdi-window-maximize"></q-btn>

    <q-btn flat icon="mdi-close-circle"></q-btn>

    <q-btn flat icon="mdi-logout" @click="doLogout()"></q-btn>
  </q-toolbar>
</template>
