import React, { useEffect, useState } from 'react'
/*
    useEffect 사용법 3. 의존성배열을 비우는 예제
*/
const Step07 = () => {
    const [count, setCount] = useState(0);

    useEffect(()=> {
        console.log('컴포넌트가 처음 렌더링 될 때만 실행')

        return ()=> (
            console.log('컴포넌트가 언마운트')
        )
    },[]); // 의존성 배열이 비어있으면

  return (
    <>
        <p>count : {count} </p>
        <button onClick={()=>setCount(count+1)}>CLICK</button>
    </>
  )
}

export default Step07