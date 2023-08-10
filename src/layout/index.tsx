
import React, { useState } from 'react';
import { Layout, Menu, Button, theme } from 'antd';
import Sider from './conponents/sider'
import Header from './conponents/header'
import Content from './conponents/content'
const LayoutElement = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className='layout-storey full-sreen'>
      <Sider collapsed={collapsed} />
      <Layout>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content />
      </Layout>
    </Layout>
  )
}

export default LayoutElement
