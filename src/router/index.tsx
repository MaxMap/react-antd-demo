import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { AuthRouter } from './hooks/AuthRouter'
const Login = lazy(() => import('@/views/login/index'))
const Layout = lazy(() => import('@/layout/index'))
const Home = lazy(() => import('@/views/home/index'))
const NotFound = lazy(() => import('@/views/notFound/index'))
const User = lazy(() => import('@/views/user/index'))

const routerList = createBrowserRouter([
  {
    path: '/',
    element: <AuthRouter><Layout /></AuthRouter>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'users',
        element: <User />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  }, {
    path: '*',
    element: <NotFound />
  }
])

export default routerList
