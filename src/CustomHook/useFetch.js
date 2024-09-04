import React, { useEffect, useState } from 'react';

function useFetch(key , initialVlue){
    const [storedValue , setStoredValue] = useState(()=>{
        try{
            const item  = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialVlue;
        }catch(error){
            return initialVlue;
        }
    });

    useEffect(()=>{
         try{
            window.localStorage.setItem(key , JSON.stringify(storedValue));
         }catch(error){
            console.log("key is removed");
         }
    } ,[storedValue ,setStoredValue]);

}

export default useFetch;