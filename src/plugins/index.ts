import vuetify from './vuetify'
import router from './router'
import { createPinia } from 'pinia'
import './api' // Initialize API interceptors

import type { App } from 'vue'

export function registerPlugins (app: App) {
  app.use(vuetify)
  app.use(router)
  app.use(createPinia())
}
