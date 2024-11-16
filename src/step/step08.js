import React, { useState } from 'react'

/*
    [useMemo]
    컴포넌트 내부에서 특정 값을 기억하고 있다가
    필요할 때 재사용할 수 있도록 해주는 HOOK
*/
const Step08 = () => {
    const [count, setCount] =useState(0);
    const [todos, setTodos] = useState([]);
    const increment = () => {
        setCount((c)=> c+1)
    }

    const addTodo = () => {
        setTodos((t)=> [...t, '새로운 할일'])
    }

    const expensiveCal = (num) => {
        console.log('복잡한 계산');
        for(let i = 0; i<100000000000;i++) {
            num += 1;
        }
        return num;
    }
  return (
    <>
    
        <div>
            <div>
                {todos.map((todo, index)=> {
                    return <p key = {index}>{todo}</p>
                })}
                <button onClick={addTodo}>CLICK</button>
            </div>
            <div>
                <p>count : {count}</p>
                <button onClick={increment}>CLICK</button>
                <p onClick={expensiveCal}>복잡한 계산</p>
            </div>
        </div>
    </>
  )
}

export default Step08