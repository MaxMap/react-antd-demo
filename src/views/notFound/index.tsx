import { Button } from 'antd';
import React, { useState } from 'react';
import Bgimg from './image/404.png'
import './css/index.scss'

function NotFound() {
    const [loadings, setLoadings] = useState<boolean>(false);
    const goHistory = () => {
        setLoadings(true);
        history.back()
    }
    return (<div className="not-found">
        <div className='content'>
            <img src={Bgimg} alt="未找到" />
            <Button type="primary" className='goback' loading={loadings} onClick={goHistory}>回退页面</Button>
        </div>
    </div>)
}
export default NotFound