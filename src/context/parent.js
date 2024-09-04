import React, { createContext } from "react";
import Child from "./child"
import { MobileContext } from "./MobileContext";

function Parent(){
    const data = "9829615838";
    return (
        <MobileContext.Provider value={data}>
        <Child value={data}/>
        <div>this is parent</div>
        </MobileContext.Provider>
        
    );

}

export default Parent;