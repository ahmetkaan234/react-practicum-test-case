import React from 'react'
import {  Result } from 'antd';

const Error = ({error}) => {
  return (
    <Result
    
    title={error}
    subTitle="Sorry, the page you visited does not exist."
    
  />
  )
}

export default Error