import React, { useReducer } from "react";
const initialState={count : 0};
function reducer(state , action){
    switch(action.type){
        case 'increment':
            return { count : state.count +1};
        default :
           return {count : state.count}
    }
}

function Counter(){
    const [state , dispatch] = useReducer(reducer , initialState);

    return (
        <div>
              <p>{state.count}</p>
              <button onClick={()=>dispatch({type : 'increment'})}>increment</button>
        </div>
    )
}

export default Counter;
