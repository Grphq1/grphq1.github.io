<script setup lang="ts">
import { formatDate } from '../utils/date'

const { frontmatter } = defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div
    class="not-prose mx-auto my-sp-5 max-w-[var(--prose-max-width)] flex flex-col gap-sp-3 md:my-sp-7 md:gap-sp-4"
    dir="auto"
  >
    <div class="w-full">
      <div class="text-display-sm font-600 font-secondary lg:text-display-lg md:text-display-md">
        <h1 class="color-base leading-none">
          {{ frontmatter.title }}
        </h1>
        <p class="pt-sp-1 color-base-secondary leading-none">
          {{ frontmatter.subtitle }}
        </p>
      </div>
    </div>

    <div class="flex items-center gap-sp-2">
      <time>
        {{ formatDate(frontmatter.date, frontmatter.lang) }}
      </time>
    </div>
    <div class="gap-sp-4" :class="{ 'flex flex-col': frontmatter.image }">
      <p>
        {{ frontmatter.description }}
      </p>
      <img
        v-if="frontmatter.image"
        :src="frontmatter.image"
        class="h-sp-25 w-full object-cover lg:h-sp-40 md:h-sp-30"
      >
    </div>
  </div>
  <Separator type="twin" class="max-w-[var(--prose-max-width)]" />
  <div dir="auto">
    <slot />
  </div>
</template>
