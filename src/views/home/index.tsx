import useStore from '@/store'
import { Input } from 'antd';
import React, { useState, useEffect } from 'react';
function Home() {
  const [val, setValue] = useState<string>('')
  const { useAuthStore } = useStore()
  useEffect(() => {
    setValue(useAuthStore.getToken || '')
  }, [])

  const changeInput = (e: string) => {
    useAuthStore.setToken(e)
    setValue(e)
  }

  return (<div className="App">home页面
    <p>token:{useAuthStore.token}</p>
    <Input placeholder="Basic usage" value={val} onChange={(e) => changeInput(e.target.value)} />
  </div>)
}

export default Home
