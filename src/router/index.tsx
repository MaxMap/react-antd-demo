import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { AuthRouter } from './hooks/AuthRouter'
const Login = lazy(() => import('@/views/login/index'))
const Layout = lazy(() => import('@/layout/index'))
const Home = lazy(() => import('@/views/home/index'))

const routerList = createBrowserRouter([
  {
    path: '/',
    element: <AuthRouter><Layout /></AuthRouter>,
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
