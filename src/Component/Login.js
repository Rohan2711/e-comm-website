import React, { useEffect } from "react";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const[password,setPassword]=React.useState("")
    const[email,setEmail]=React.useState("")
    const navigate =useNavigate()
    useEffect(()=>{
        const auth=localStorage.getItem('user')
        if(auth){
            navigate("/")
        }
    },[])
    const handleLogin=async()=>{
        console.log(email,password)
        let result =await fetch("http://localhost:5000/login",{
            method:"post",
            body:JSON.stringify({email,password}),
            headers:{
                "Content-Type": "application/json"
            }
    
        });
        result=await result.json();
        console.warn(result)
        if(result.auth){
            localStorage.setItem("user",JSON.stringify(result.user));
            localStorage.setItem("token",JSON.stringify(result.auth)) 
            navigate("/")
        }
        else{
            alert("Please enter the correct details")
        }
    }
    return(
        <div className="Login">
            <center><h1 style={{marginRight:500}}>Login</h1></center>
            <input type="text" className="inputBox" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Email" ></input>
            <input type="password" className="inputBox" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Password" ></input>
            <center><button className="buttonClassLogin" onClick={handleLogin}>Log In </button></center>
        </div>
    )
}
export default Login;