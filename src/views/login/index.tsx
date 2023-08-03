import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom'
import gologinImg from './image/gologin.png'
import './css/index.scss'
function Login() {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }
  return (
    <div className="full-sreen loginPage flexCenter">
      <div className='main-content'>
        <img className='gologin' src={gologinImg} alt="" />
        <div className='main-form'>
          <p className='title'>登录</p>
          <Form
            name="loginForm"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            {/* <Form.Item<FieldType>
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item> */}

            {/* <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item> */}

            {/* <Form.Item<FieldType>
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item> */}

            {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item> */}
          </Form>
        </div>
      </div>
      {/* <Button type="primary" onClick={goHome}>
        跳转主页
      </Button> */}
    </div>
  )
}

export default Login
