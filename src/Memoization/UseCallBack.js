import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";

function TestUseCallBack(){
    const [count , setCount] = useState(0);

    const dummyData = useCallback(()=>{
        console.log("useCallBack Called");
        let sum = 0;
        for(let i = 0 ;i <10000 ;i++){

           sum+=i;

        }
        return sum;
    },[]);

    const increment = ()=>{
        setCount((count)=>count+1);
    }

    return (
        <>
        <div>hello this is dummy data : {dummyData}</div>
        <button onClick={increment}>Increment</button>
        <div>hello this is counter: {count}</div>
        <Child dummyData={dummyData}/>
        </>
    )
}
export default TestUseCallBack;