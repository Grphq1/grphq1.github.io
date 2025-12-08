import type { RouteRecordNormalized } from 'vue-router'
import type { ArticleFrontmatter } from '../types/ArticlesFrontmatter'
import { useRouter } from 'vue-router'

export function usePosts() {
  const router = useRouter()

  return router
    .getRoutes()
    .filter((r: RouteRecordNormalized) => {
      const frontmatter = r.meta?.frontmatter as ArticleFrontmatter
      return (
        r.path.startsWith('/articles')
        && r.path !== '/articles'
        && r.path !== '/articles/'
        && !!frontmatter?.date
      )
    })
    .map((r: RouteRecordNormalized) => {
      const frontmatter = r.meta?.frontmatter as ArticleFrontmatter
      return {
        path: frontmatter?.redirect || r.path,
        title: frontmatter?.title ?? 'Untitled',
        date: frontmatter?.date ?? '',
        lang: frontmatter?.lang ?? 'en',
        subtitle: frontmatter?.subtitle ?? '',
        image: frontmatter?.image,
        description: frontmatter?.description,
        redirect: frontmatter?.redirect,
      }
    })
}
