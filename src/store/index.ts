import { defineStore } from 'pinia'

export const mainStore = defineStore('main', {
    state: () => {
        return {
            helloWorld: 'hello World'
        }
    },
    getters: {},
    actions: {}
})