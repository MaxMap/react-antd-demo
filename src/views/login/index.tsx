import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'
import gologinImg from './image/gologin.png'
import './css/index.scss'
import useAuthStore from '@/store/authStore';
import useRootStore from '@/store/rootStore';
import { useEffect } from 'react'
import { local } from '@/utils/useStorage';
function Login() {
  type FieldType = {
    username?: string;
    password?: string;
    remember?: boolean;
  };

  useEffect(() => {
    local.clear()
  }, [])

  const navigate = useNavigate()

  const rules = {
    userName: [{ required: true, message: '请输入用户名！' }],
    password: [{ required: true, message: '请输入密码！' }]
  }

  /* 提交表单且数据验证成功后回调事件 */
  const onFinish = (values: any) => {
    // console.log('Success:', values);
    for (const i in values) {
      if (typeof values[i] === 'string') values[i] = values[i].trim()
    }
    useAuthStore.login(values).then(res => {
      if (!res) return false
      useRootStore.setToken(res.token)
      navigate('/')
    })
  };

  /* 提交表单且数据验证失败后回调事件 */
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="full-sreen loginPage flexCenter">
      <div className='main-content'>
        <img className='gologin' src={gologinImg} alt="" />
        <div className='main-form'>
          <p className='title'>登录</p>
          <Form
            name="loginForm"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item<FieldType>
              name="username"
              rules={rules.userName}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" maxLength={64} />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={rules.password}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                maxLength={64}
              />
            </Form.Item>

            <Form.Item>
              <Form.Item<FieldType> name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
