<script setup>
const corporation = useAppConfig().corporation;
</script>

<template>
  <q-footer elevated class="bg-grey-8 text-white">
    <q-toolbar>
      <q-toolbar-title>
        <div>{{ corporation }}</div>
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>

  <!-- <footer>
    <div class="bg-gray-800 text-white text-center text-sm p-2">
      {{ corporation }}
    </div>
  </footer> -->
</template>
