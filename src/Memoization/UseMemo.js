import React, { useMemo, useState } from 'react';

function TestMemo(){
    
    const [count , setCount] = useState(0);

    const incrementCount = ()=>{
        setCount(count=>count+1);
    }

    console.log("rendering again");

    const cube = useMemo(()=>{
        return 100;
    },[]);
     

    return (
        <div>
            hello this is cube : { cube }
            <br></br>
            <span>{count}</span>
            <button onClick={incrementCount}>increment</button>
        </div>
    )

}
export default TestMemo;