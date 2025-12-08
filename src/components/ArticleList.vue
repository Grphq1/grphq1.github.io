<script setup lang="ts">
import type { ArticleFrontmatter } from '../types/ArticlesFrontmatter'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { usePosts } from '../composables/usePosts'
import { formatDate } from '../utils/date'

const props = defineProps<{
  articles?: ArticleFrontmatter[]
}>()

const articles = usePosts()

const articlesSorted = computed(() =>
  (props.articles || articles || []).sort(
    (a, b) => +new Date(b.date) - +new Date(a.date),
  ),
)
</script>

<template>
  <div class="not-prose grid gap-sp-4 md:grid-cols-2">
    <template v-if="!articlesSorted.length">
      <div class="py-sp-4 text-center color-base-secondary md:col-span-2">
        No articles yet
      </div>
    </template>

    <article v-for="article in articlesSorted" :key="article.path" class="group">
      <component
        :is="article.redirect ? 'a' : RouterLink"
        :href="article.redirect"
        :to="article.redirect ? undefined : article.path"
        :target="article.redirect ? '_blank' : undefined"
        :rel="article.redirect ? 'noopener noreferrer' : undefined"
        class="block no-underline transition-opacity hover:opacity-70"
      >
        <div class="article-card" dir="auto">
          <img
            v-if="article.image"
            :src="article.image"
            :alt="article.title"
            class="h-sp-25 w-full object-cover lg:h-sp-35 md:h-sp-30"
          >

          <div class="article-content">
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
                {{ formatDate(article.date, article.lang, false) }}
              </time>
            </div>

            <p
              v-if="article.description"
              class="text-sm color-base-secondary leading-relaxed"
            >
              {{ article.description }}
            </p>
          </div>
        </div>
      </component>
    </article>
  </div>
</template>
