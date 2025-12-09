<script setup lang="ts">
import type { ThoughtsFrontmatter } from '../types/ThoughtsFrontmatter'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useThoughts } from '../composables/useThoughts'
import { formatDate } from '../utils/date'

const props = defineProps<{
  thoughts?: ThoughtsFrontmatter[]
}>()

const thoughts = useThoughts()
const thoughtsSorted = computed(() =>
  (props.thoughts || thoughts || []).sort(
    (a, b) => +new Date(b.date) - +new Date(a.date),
  ),
)
</script>

<template>
  <div class="not-prose grid gap-sp-4 lg:grid-cols-2 md:grid-cols-2">
    <template v-if="!thoughtsSorted.length">
      <div class="py-sp-4 text-center color-base-secondary md:col-span-2">
        No thoughts yet
      </div>
    </template>

    <article
      v-for="article in thoughtsSorted"
      :key="article.path"
      class="group"
    >
      <component
        :is="article.redirect ? 'a' : RouterLink"
        :href="article.redirect"
        :to="article.redirect ? undefined : article.path"
        :target="article.redirect ? '_blank' : undefined"
        :rel="article.redirect ? 'noopener noreferrer' : undefined"
        class="block no-underline transition-opacity hover:opacity-70"
      >
        <div class="flex flex-col gap-sp-2">
          <div class="flex flex-col gap-sp-1">
            <div class="flex items-center justify-between">
              <h3 class="text-heading-sm color-base font-medium">
                {{ article.title }}
                <span class="color-base-secondary">
                  {{ article.subtitle }}
                </span>
              </h3>
              <time
                class="ml-sp-2 flex-shrink-0 whitespace-nowrap text-sm color-base-secondary"
              >
                {{ formatDate(article.date, article.lang) }}
              </time>
            </div>
          </div>
          <p
            v-if="article.description"
            class="text-sm color-base-secondary leading-relaxed"
          >
            {{ article.description }}
          </p>
        </div>
      </component>
    </article>
  </div>
</template>
