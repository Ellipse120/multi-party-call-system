<script setup>
const props = defineProps({
  title: "",
});

const emits = defineEmits(["update:title"]);

const attrs = useAttrs();

const emitTitle = (val) => {
  const v = attrs.options?.find((o) => o.key === val);
  emits("update:title", v?.value);
};

watch(
  () => attrs.modelValue,
  (v) => {
    emitTitle(v);
  }
);
</script>

<template>
  <q-select
    fill-input
    input-debounce="0"
    option-label="value"
    option-value="key"
    emit-value
    map-options
    clearable
    v-bind="{ ...$attrs, ...$props }"
  >
    <template v-slot:no-option>
      <q-item>
        <q-item-section class="text-grey">暂无数据</q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<style></style>
