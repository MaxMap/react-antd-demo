import { makeAutoObservable } from 'mobx'
import { authApi } from '@/api/index'
import { makePersistable } from 'mobx-persist-store'

type Token = string | undefined | null

class AuthStore { 
    
    token: Token = undefined
    constructor() {
        makeAutoObservable(this)
        makePersistable(this, {
            name: 'AuthStore', // 存储到localStorage当中的key值是什么，此处为字符串string；
            properties: ['token'], // 需要持久化的数据是什么，此数据需要为上面声明了的变量，并且传值方式为[string]
            storage: window.localStorage, // 你的数据需要用那种方式存储，常见的就是localStorage
        })
    }

    get getToken(): Token {
        //  if (!this.token) {
        //     this.token = local.get('token')
        //  }
         return this.token
    }

    setToken(val:string):void {
        this.token = val
        // local.set('token',val)
        // setLocalToken(val)
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