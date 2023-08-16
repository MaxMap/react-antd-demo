import { makeAutoObservable } from 'mobx'
import { layoutApi } from '@/api/index'
import { makePersistable } from 'mobx-persist-store'

interface MenuData {
    key: string,
    label: string,
    iconName?: string,
    path: string,
    children: MenuData[]
}

class LayoutStore { 
    menu:MenuData[] = []

    constructor() {
        makeAutoObservable(this)
        makePersistable(this, {
            name: 'LayoutStore', // 存储到localStorage当中的key值是什么，此处为字符串string；
            properties: ['menu'], // 需要持久化的数据是什么，此数据需要为上面声明了的变量，并且传值方式为[string]
            storage: window.localStorage, // 你的数据需要用那种方式存储，常见的就是localStorage
        })
    }
    get localMenu() {
        return this.menu
    }

    /* 获取菜单 */
     async getMenu() {
         const result = await layoutApi.getMenu()         
         if (!result) return false
         this.menu = result.data
        return result.data
    }
}

const useLayoutStore = new LayoutStore()

export default useLayoutStore