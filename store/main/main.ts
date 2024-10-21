import type {MainState} from './Imain'

export const useMainStore = defineStore('MainStore', {
    state: (): MainState => ({
        theme: 'white',
    }),
    getters: {
        
    },
    actions: {
        ChangeTheme() : void{
            this.theme = this.theme === 'black' ?  'white' : 'black'
        }
    },
    persist: {
        storage: persistedState.localStorage
    },
});



