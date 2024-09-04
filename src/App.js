// useStateHook
import React, { useState } from "react";
import './App.css'
function App(){
    const [formData , setFormData] = useState({
        name : '',
        age : ''
    });
    const handleChange = (e)=>{
           console.log(e.target);
            const {name , value} = e.target;
            setFormData((formData)=>{
                return {
                    ...formData,
                    [name] : value
                }
               
            })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        alert(formData);
        console.log(formData);
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
        <span>name</span>
        <input type="text" name="name" value={formData.name} onChange={handleChange}></input>
        <span>age</span>
        <input type="text" name="age" value={formData.age} onChange={handleChange}></input>
        <button type="submit">submit</button>
        </form>
        </>
    );
}
export default App;