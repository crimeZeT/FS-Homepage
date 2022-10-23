import { defineStore } from 'pinia'
import defFav from '@static/favicon.svg'

const defaultState: {
  defaultFavicon: any
  defaultTitle: string
  language: SupportedLanguages
  initialTime: Date
  isUniNetwork: boolean
  nonce: string
} = {
  defaultFavicon: defFav,
  defaultTitle: "FSMPI",
  language: "de",
  initialTime: new Date(),
  isUniNetwork: false,
  nonce: ""
  //x2: ""
}

export type State = typeof defaultState;

//export const key: InjectionKey<Store<State>> = Symbol()


export const useStore = defineStore('main', {
  state: () => defaultState,
  actions: {
    setLanguage(lang: SupportedLanguages)
    {
      this.language = lang
    }
  },
  getters: {
    /*route(state)
    {
      return router.currentRoute.value
    }*/
  }
})

//export type DefaultStoreType = ReturnType<typeof createDefaultStore>;
export type DefaultStateType = State;