<script setup>
const props = defineProps({
  error: Object,
});

const message = computed(() => String(props.error?.message || ""));
const is404 = computed(
  () => props.error?.statusCode === 404 || message.value?.includes("404")
);
const isDev = process.dev;

function handleError() {
  return clearError({ redirect: "/" });
}
</script>

<template>
  <NuxtLayout>
    <div flex="~ col" h-screen text-center items-center justify-center gap4>
      <div text-3xl>
        {{ is404 ? "找不到页面" : "页面报错了" }}
      </div>
      <div text-xl op50>您正在访问不存在的页面，请检查URL是否正确</div>
      <pre v-if="isDev">{{ error }}</pre>
      <q-btn color="primary" label="返回" @click="handleError()"> </q-btn>
    </div>
  </NuxtLayout>
</template>
