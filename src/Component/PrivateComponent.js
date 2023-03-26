import React from "react";
import {Navigate,Outlet} from "react-router-dom"
//here the PrivateComponent will be wrapper inside this we will pass the component as props outlet will handle that

const PrivateComponent=()=>{                  //Here we have added the private component because if we the user is not sign up thwn he should not be able to access the other link and he can access alll the links if he is signned in otherwise he will be navigated to sign up page 
    const auth=localStorage.getItem('user')
    return auth?<Outlet />:<Navigate to="/signup" />
}
export default PrivateComponent;