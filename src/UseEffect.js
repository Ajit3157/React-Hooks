import React, { useEffect, useState } from "react";
import axios from 'axios';
function TestUseEffect(){
    const [count , setCount]= useState(0);
    useEffect(()=>{
        // console.log("component rendered");
        // const interval = setInterval(()=>{
        //     setCount((count)=>count+1);
        // } , 1000);
        //api calls or create connections
        // fetch('https://jsonplaceholder.typicode.com/posts').then(res=> res.json()).then((post)=>{
        //     console.log(post);
        //     setCount(post[0].id);
        // })
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            setCount(res.data[0].id);
        });
        // return ()=>{
        //   clearInterval(interval);
        //   console.log('Destroid TestUseEffect');    
        // }
    } , []);

    return (
        <div>
            this is counter {count}
        </div>
    )
}
export default TestUseEffect;