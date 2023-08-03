# react-antd demo项目

## 依赖包版本

```json
{
  "antd": "^5.7.3",
  "react": "^18.2.0",
  "typescript": "^5.1.6",
  "react-router-dom": "^6.14.2"
  ... // 具体查看package.json
}
```

## node、npm版本

```json
{
  "node": "18.17.0", // >=18.0.0
  "npm": "9.6.8"
}
```

## 依赖链接

[react-router-dom_v6](https://reactrouter.com/)
[mobx_v6](https://zh.mobx.js.org/)


## mobx 使用案例

`@/src/store/rootStore.ts`
```ts

import { makeObservable, observable, computed,action } from 'mobx'

type Token = string | undefined | null

 class RootStore {
    token: Token = undefined
    
    constructor() {
        makeObservable(this, {
            token: observable,
            getToken: computed,
            setToken: action
        })
    }

    get getToken():Token {
        return this.token
    }

    setToken(val:string):void {
        this.token = val
    }
}

const useRootStore = new RootStore()

export default useRootStore
```

`@/views/home/index.tsx`

```tsx
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

  return (<div className="App">
    <p>token:{useRootStore.token}</p>
    <Input placeholder="Basic usage" value={val} onChange={(e) => changeInput(e.target.value)} />
  </div>)
}

export default Home

```

### 成功展示

![monx-demo.png](./readme/mobx-demo.png)
