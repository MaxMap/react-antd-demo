import React, { useState } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom'
const ContentElemnt = () => {
    const { Content } = Layout;
    return (<Content>
        <Outlet />
    </Content>)
}

export default ContentElemnt