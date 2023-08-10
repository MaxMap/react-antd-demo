import { makeObservable, observable, computed,action } from 'mobx'
import {local} from '@/utils/useStorage'


type Token = string | undefined | null



 class RootStore {
    token: Token = undefined
    
    constructor() {
        makeObservable(this, {
            token: observable,
            getToken: computed,
            setToken: action
        })
    }

     get getToken(): Token {
         if (!this.token) {
            this.token = local.get('token')
         }
         return this.token
    }

    setToken(val:string):void {
        this.token = val
        local.set('token',val)
        // setLocalToken(val)
    }
}

const useRootStore = new RootStore()

export default useRootStore