import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import TestUseEffect from './UseEffect'
import Parent from './context/parent';
import Counter from './UseReducer';
import TestMemo from './Memoization/UseMemo';
import TestUseCallBack from "./Memoization/UseCallBack";
import TestUseRef from './UseRef'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <TestUseEffect/> */}
    {/* <Parent/> */}
    {/* <Counter/> */}
    {/* <TestMemo/> */}
    {/* <TestUseCallBack/> */}
    <TestUseRef/>
  </React.StrictMode>
)