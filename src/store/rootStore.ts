import { makeObservable, observable, computed,action } from 'mobx'
import useLocalStorageState from 'use-local-storage-state'


type Token = string | undefined | null


const [localToken, setLocalToken] = useLocalStorageState('token', {
    defaultValue: ''
})
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
        return this.token || localToken
    }

    setToken(val:string):void {
        this.token = val
        setLocalToken(val)
    }
}

const useRootStore = new RootStore()

export default useRootStore