<script setup lang="ts">
const { type = 'dynamic' } = defineProps<{
  type?: 'alone' | 'twin' | 'dynamic'
}>()
</script>

<template>
  <div
    class="mx-auto my-sp-6 flex items-end justify-between text-2xl color-base-secondary lg:text-3xl"
    :class="type !== 'twin' ? 'md:justify-center' : 'md:justify-between'"
  >
    <div class="i-ri-add-large-line" />
    <div
      class="i-ri-add-large-line"
      :class="{ 'md:hidden': type !== 'twin' }"
    />
  </div>
</template>
