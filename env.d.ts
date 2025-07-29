/// <reference types="vite/client" />

declare module '*.vue' {
  import type { VueComponent } from 'vue'
  const component: VueComponent<{}, {}, any>
  export default component
}
