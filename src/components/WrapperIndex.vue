<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// TODO: use TS for define props
const { frontmatter } = defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
})

const route = useRoute()

const showSeparator = computed(() => (frontmatter.title || frontmatter.subtitle || frontmatter.description))
</script>

<template>
  <div
    class="not-prose mx-auto my-sp-5 flex flex-col gap-sp-3 md:my-sp-7 md:gap-sp-4"
  >
    <div v-if="frontmatter.title" class="text-display-sm font-600 font-secondary lg:text-display-lg md:text-display-md">
      <h1 class="color-base leading-tight">
        {{ frontmatter.title }}
      </h1>
      <p
        v-if="frontmatter.subtitle"
        class="max-w-3xl color-base-secondary leading-tight"
      >
        {{ frontmatter.subtitle }}
      </p>
    </div>
    <p v-if="frontmatter.description">
      {{ frontmatter.description }}
    </p>
  </div>
  <Separator v-if="route.path !== '/' && showSeparator" />
  <slot />
</template>
