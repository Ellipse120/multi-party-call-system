<script setup></script>

<template>
  <div class="bg-white dark:bg-gray-900">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
  color-scheme: normal;
}

.router-link-active {
  @apply underline decoration-3 decoration-dotted rounded underline-offset-6 underline-indigo-600 text-indigo-600 transition-colors duration-200;
}

.router-link-exact-active {
  @apply underline decoration-3 decoration-dotted rounded underline-offset-6 underline-indigo-600 text-indigo-600 transition-colors duration-200;
}
</style>
