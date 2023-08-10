import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Button, theme } from 'antd';

const HeaderElement = (props: { collapsed: boolean, setCollapsed: any }) => {
    const { Header } = Layout;
    const { collapsed, setCollapsed } = props;
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (<Header style={{ padding: 0, background: colorBgContainer }}>
        <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
                fontSize: '16px',
                width: 64,
                height: 64,
            }}
        />
    </Header>)
}

export default HeaderElement