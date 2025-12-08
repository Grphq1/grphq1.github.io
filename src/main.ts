import { ViteSSG } from 'vite-ssg'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'
import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'

export const createApp = ViteSSG(App, { routes })
