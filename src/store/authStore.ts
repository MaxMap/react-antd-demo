import { makeObservable, observable, computed, action } from 'mobx'
import {authApi} from '@/api/index'
class AuthStore { 
    constructor() {
        makeObservable(this, {
            login:action
        })
    }
    /* 登录 */
     async login(data:object) {
         const result = await authApi.login(data)         
         if (!result) return false
         
        return result.data
    }
}

const useAuthStore = new AuthStore()

export default useAuthStore