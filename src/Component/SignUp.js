import React from "react";
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
// import { json } from "react-router-dom";
import PrivateComponent from "./PrivateComponent";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();
   
    
    useEffect(()=>{
        const auth=localStorage.getItem('user')
    if(auth)
    {
        navigate('/')
    }
    },[])

    const collectData = async () => {
    //    console.warn("hello")

        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),  //Api takes object in the form of json stringify
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json()
        console.log(result)
        localStorage.setItem("user",JSON.stringify(result.result)) 
        localStorage.setItem("token",JSON.stringify(result.auth))   // We are going to save the item in localStrorage so that though the browser gets refreshed the data must be stored until the programmer deletes it
         // if(res){
            navigate('/')
        // }
    }
    return (

        <center>
            <div>
                <h1>Register</h1>
                <input className="inputBox" type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Name" />
                <input className="inputBox" type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" />
                <input className="inputBox" type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
                <button className="buttonClass" onClick={collectData}>Sign Up</button>
            </div>
        </center>



    )
}
export default SignUp;