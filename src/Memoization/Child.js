import React from "react";

function Child(props){


    return (
        <div>child sum is : {props.dummyData()}</div>
        //<button onClick={()=>props.dummyData()}>sourabh</button>
    )
}

export default React.memo(Child);