import React from 'react'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Loading = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 54 }} spin />
  return (
    <div   className='h-96 w-full flex justify-center items-center'>
    <Spin indicator={antIcon} />
    </div>
  )
}

export default Loading