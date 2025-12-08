<script setup lang="ts">
import { usePosts } from '../composables/usePosts'
import ArticleList from './ArticleList.vue'

const articles = usePosts()
const landingArticles = articles
  .sort((a, b) => +new Date(b.date) - +new Date(a.date))
  .slice(0, 2)
</script>

<template>
  <div class="not-prose my-sp-6">
    <div class="mb-sp-4 flex flex-col">
      <h2
        class="mb-sp-1 text-heading-lg color-base font-bold leading-none font-secondary"
      >
        Article
      </h2>
      <p class="max-w-sm color-base-secondary">
        Thoughtful, in-depth articles that share practical insights, lessons
        learned, and perspectives gathered from real projects and experiments.
      </p>
    </div>
    <ArticleList :articles="landingArticles" />
  </div>
</template>
