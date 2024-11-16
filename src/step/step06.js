import React, { useEffect, useState } from 'react'

/*

    useEffect 사용법 2. 의존성 배열[Dependency Array]을 사용하는 예제
*/
const Step06 = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log(`카운트가 ${count}로 변경됨`)
    }, [count]); // count 값이 변경될 때만 실행

  return (
    <>
        <p>count : {count} </p>
        <button onClick={()=>setCount(count+1)}>CLICK</button>
    </>
  )
}

export default Step06