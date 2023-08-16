// 路由守卫
// 判断token是否存在（如果存在跳转主页，如果不存在跳转登录页面）
import { useNavigate, Navigate, useLocation } from "react-router-dom"
import React, { useEffect, useState } from "react";
import useStore from '@/store'

// 创建一个高阶组件，高阶组件就是 把一个组件当做另一个组件的参数传入 然后通过判断 返回新的组件
// 下面的 AuthRouter 就是一个高阶组件
/* 登录后页面校验 */
function AuthRouter({ children }: any) {
    const location = useLocation(); // 当前路由
    const { useAuthStore } = useStore()
    const token = useAuthStore.getToken
    useEffect(() => {
        // console.log('location.pathname', location.pathname);
    }, [location])

    if (token) {
        return <>{children}</>
    } else {
        return <Navigate to={'/login'}></Navigate>
    }

}
export { AuthRouter }