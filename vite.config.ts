import MarkdownItShiki from '@shikijs/markdown-it'
import Vue from '@vitejs/plugin-vue'
import fs from 'fs-extra'
import matter from 'gray-matter'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import Markdown from 'unplugin-vue-markdown/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    VueRouter({
      routesFolder: 'pages',
      extensions: ['.vue', '.md'],
      extendRoute(route) {
        const path = route.components.get('default')
        if (!path)
          return
        const { data } = matter(fs.readFileSync(path, 'utf-8'))

        route.addToMeta({
          frontmatter: data,
        })
      },
    }),

    Vue({
      include: [/\.vue$/, /\.md$/],
    }),

    Markdown({
      async markdownItSetup(md) {
        md.use(
          await MarkdownItShiki({
            themes: {
              light: 'vitesse-light',
              dark: 'vitesse-dark',
            },
            defaultColor: false,
            cssVariablePrefix: '--s-',
          }),
        )
      },
      headEnabled: true,
      wrapperClasses: (_, code) =>
        code.includes('@layout-full-width')
          ? '!max-w-full mx-auto prose dark:prose-invert prose-gray prose-pre:[direction:ltr]'
          : 'prose m-auto dark:prose-invert prose-gray prose-pre:[direction:ltr]',

      wrapperComponent: (id) => {
        if (
          (id.includes('/articles/') || id.includes('/thoughts/'))
          && !id.endsWith('/articles/index.md')
          && !id.endsWith('/thoughts/index.md')
        ) {
          return 'WrapperPost'
        }

        return 'WrapperIndex'
      },
    }),

    UnoCSS(),
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
  ],
})
