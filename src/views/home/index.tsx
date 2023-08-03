import useRootStore from '@/store/rootStore'
import { Input } from 'antd';
import React, { useState, useEffect } from 'react';
function Home() {
  const [val, setValue] = useState<string>('')
  useEffect(() => {
    setValue(useRootStore.token || '')
  }, [])

  const changeInput = (e: string) => {
    useRootStore.setToken(e)
    setValue(e)
  }

  return (<div className="App">home页面
    <p>token:{useRootStore.token}</p>
    <Input placeholder="Basic usage" value={val} onChange={(e) => changeInput(e.target.value)} />
  </div>)
}

export default Home
