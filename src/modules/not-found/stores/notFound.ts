import { defineStore } from 'pinia'

export const useNotFoundStore = defineStore('notFound', {
  state: () => ({
    currentPath: ''
  }),
  
  actions: {
    setCurrentPath(path: string) {
      this.currentPath = path
    },
    
    init(path: string) {
      this.setCurrentPath(path)
    }
  }
}) 