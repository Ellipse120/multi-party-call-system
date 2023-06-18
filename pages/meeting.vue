<script setup>
definePageMeta({
  name: "会议",
  middleware: ["auth"],
});

const { token } = useAuth();

const currentYear = ref(useDateFormat(new Date(), "YYYY"));
</script>

<template>
  <div>
    index , {{ currentYear }}
    <div>{{ token }}</div>
  </div>
</template>
