import React, { useEffect, useRef } from "react";
function TestUseRef(){
    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.style.backgroundColor = "lightblue";
    } , [])
    return (
       // <div>this is div</div>
        <input ref = {inputRef}></input>
    )
}
export default TestUseRef;