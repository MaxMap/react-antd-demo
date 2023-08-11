import { makeObservable, observable, computed, action } from 'mobx'
import {local} from '@/utils/useStorage'
import { layoutApi } from '@/api/index'
import { json } from 'stream/consumers'

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
        makeObservable(this, {
            menu:observable,
            localMenu:computed,
            getMenu:action,
        })
    }
    get localMenu() {
        if (this.menu && this.menu.length > 0) {
            return this.menu
        } else {
            if (local.get('menu')) {
                console.log("local.get('menu')",local.get('menu'));
                
                // this.menu = JSON.parse()
                return this.menu
            }   
        }
         
    }

    /* 获取菜单 */
     async getMenu() {
         const result = await layoutApi.getMenu()         
         if (!result) return false
         this.menu = result.data
         local.set('menu',JSON.stringify(this.menu))
        return result.data
    }
}

const useLayoutStore = new LayoutStore()

export default useLayoutStore