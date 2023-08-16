import React from 'react'
import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'
import useAuthStore from './modules/authStore'
import useLayoutStore from './modules/layoutStore'
// import {local} from '@/utils/useStorage'

 class RootStore {
     
     useAuthStore = useAuthStore
     useLayoutStore =useLayoutStore
    
    constructor() {
        makeAutoObservable (this)        
    }

    
}

const rootStore = new RootStore()
// 这里可以使用React context 完成统一方法的封装需求
const context = React.createContext(rootStore)
// 封装useStore方法，业务组件调用useStore方法便就可以直接获取rootStore
const useStore = () => React.useContext(context)

export default useStore