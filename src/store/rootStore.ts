import { makeObservable, observable, computed,action } from 'mobx'

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

    get getToken():Token {
        return this.token
    }

    setToken(val:string):void {
        this.token = val
    }
}

const useRootStore = new RootStore()

export default useRootStore