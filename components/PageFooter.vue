<script setup>
const corporation = useAppConfig().corporation;
</script>

<template>
  <footer>
    <div class="bg-gray-800 text-white text-center text-sm p-2">
      {{ corporation }}
    </div>
  </footer>
</template>
