<script setup>
definePageMeta({
  name: "首页",
  layout: "home",
  middleware: ["auth"],
});

const { token } = useAuth();

const currentYear = ref(useDateFormat(new Date(), "YYYY"));
</script>

<template>
  <div>
    index , {{ currentYear }}
    <div>{{ token }}</div>

    <v-btn color="primary" @click="navigateTo('/meeting')">Meeting</v-btn>
  </div>
</template>
