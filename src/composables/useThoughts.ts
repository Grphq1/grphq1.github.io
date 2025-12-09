import type { RouteRecordNormalized } from 'vue-router'
import type { ThoughtsFrontmatter } from '../types/ThoughtsFrontmatter'
import { useRouter } from 'vue-router'

export function useThoughts() {
  const router = useRouter()
  return router
    .getRoutes()
    .filter((r: RouteRecordNormalized) => {
      const frontmatter = r.meta?.frontmatter as ThoughtsFrontmatter
      return (
        r.path.startsWith('/thoughts')
        && r.path !== '/thoughts'
        && r.path !== '/thoughts/'
        && !!frontmatter?.date
      )
    })
    .map((r: RouteRecordNormalized) => {
      const frontmatter = r.meta?.frontmatter as ThoughtsFrontmatter
      return {
        path: frontmatter?.redirect || r.path,
        title: frontmatter?.title ?? 'Untitled',
        date: frontmatter?.date ?? '',
        lang: frontmatter?.lang ?? 'en',
        subtitle: frontmatter?.subtitle ?? '',
        description: frontmatter?.description,
        redirect: frontmatter?.redirect,
      }
    })
}
