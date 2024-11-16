import React, { useState } from 'react'

const Event02 = () => {
    const [msg, setMsg] = useState('마우스를 올려보세요')
    const handleMouseOver = () => {
        setMsg('마우스 오버됨');
    }

    const handleMouseOut = () => {
        setMsg('마우스 아웃');
    } 
    
  return (
    <>
        <p onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>마우스</p>
    </>
  )
}

export default Event02