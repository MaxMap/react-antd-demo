import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <div>
            Layout页面
            <Outlet />
        </div>
    )
}

export default Layout