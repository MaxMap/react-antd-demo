import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
function Login() {
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }
  return (
    <div className="App">
      Login页面
      <Button type="primary" onClick={goHome}>
        跳转主页
      </Button>
    </div>
  )
}

export default Login
