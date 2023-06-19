<script setup>
definePageMeta({
  name: "首页",
  layout: "home",
  middleware: ["auth"],
});

const { token } = useAuth();

const currentYear = ref(useDateFormat(new Date(), "YYYY"));

const { data } = useRequest("/api/mock");
</script>

<template>
  <div>
    index , {{ currentYear }}
    <div>{{ token }}</div>

    <v-btn color="primary" @click="navigateTo('/meeting')">Meeting</v-btn>

    <div class="text-center text-white text-3xl bg-indigo-500 rounded my-4 p-8">
      {{ data }}
    </div>
  </div>
</template>
