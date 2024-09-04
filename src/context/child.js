import React, { useContext } from "react";
import { MobileContext } from "./MobileContext";

function Child(){
    const data = useContext(MobileContext)
    return (
        <div>this is child {data}</div>
    )

}

export default Child;