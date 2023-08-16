import React, { useState, useEffect } from 'react';
import {
    WindowsOutlined,
    TeamOutlined,
    AppstoreAddOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import useLayoutStore from '@/store/modules/layoutStore'
import '../css/sider.scss'
import { getMenu } from '../../api/layout.api';
import type { MenuProps } from 'antd';
import { flattenTree } from "@/utils/helpers";
import { useNavigate } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number];

interface MenuData {
    key: string,
    label: string,
    iconName?: string,
    path?: string,
    icon?: React.ReactNode,
    children?: MenuItem[],
}


interface IconObj {
    [key: string]: any
}

const Sider = (porps: { collapsed: any; }) => {
    const { Sider } = Layout;
    const { collapsed } = porps;
    const navigate = useNavigate()
    const iconObj: IconObj = {
        "WindowsOutlined": <WindowsOutlined />,
        "TeamOutlined": <TeamOutlined />,
        "AppstoreAddOutlined": <AppstoreAddOutlined />,
    }
    const [menuData, setMenuData] = useState<MenuItem[]>([])
    const [flatMneu, setflatMneu] = useState<MenuData[]>([])

    useEffect(() => {
        getMenu()
    }, [])

    /* 获取菜单数据 */
    const getMenu = () => {
        useLayoutStore.getMenu().then(res => {
            if (res && res.length > 0) {
                itemsMneu(res)
                setflatMneu(flattenTree<MenuData>(res))
            }
        })
    }

    /**
     * @title 配置菜单
     * @param arr 接口返回的数据
     */
    const itemsMneu = (arr: MenuData[]) => {
        const menuList: any[] = []
        arr.forEach((item: MenuData, index: number) => {
            /* 添加icon */
            if (item.iconName) {
                item.icon = iconObj[item.iconName]
            }
            menuList.push({
                key: item.key,
                label: item.label,
                icon: item.icon,
                children: null
            })
            if (item.children && item.children.length > 0) {
                menuList[index].children = []
                item.children.forEach((v: any) => {
                    menuList[index].children.push({
                        key: v.key,
                        label: v.label,
                    })
                })
            }
        })
        setMenuData(menuList)
    }

    /**
     * 点击菜单
     * @param key key
     */
    const changeItem = (key: string) => {
        const row = flatMneu.find(item => item.key === key) as MenuData
        console.log(row.path);

        navigate(row.path as string)
    }

    return (<Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo-vertical"></div>
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={menuData}
            onClick={({ key }) => { changeItem(key) }}
        >
            {/* antd 不推荐以下写法，后期会被废弃 */}
            {/* <Menu.Item key={'1'}>
                demo1
            </Menu.Item>
            <Menu.Item key={'2'}>
                demo2
            </Menu.Item>
            <Menu.SubMenu title={'demo3'} key={'3'}>
                <Menu.Item key={'3-1'}>
                    demo3-1
                </Menu.Item>
            </Menu.SubMenu> */}
        </Menu>
    </Sider>)
}

export default Sider