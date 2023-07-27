import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
const Login = lazy(() => import('@/views/login/index'))
const Layout = lazy(() => import('@/layout/index'))
const Home = lazy(() => import('@/views/home/index'))

const routerList = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default routerList
