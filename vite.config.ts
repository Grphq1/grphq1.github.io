import vue from '@vitejs/plugin-vue'
import fs from 'fs-extra'
import matter from 'gray-matter'
import UnoCSS from 'unocss/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS(), VueRouter({
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
  })],
})
