import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import { BrowserHi } from "@remix-run/router";
import { useNavigate } from "react-router-dom";
export default function Nav() {
    const auth = localStorage.getItem('user')
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/signup")
    }
    return (
        <>
        <img className="imgLogo" src="https://loadcentral.com.ph/wp-content/uploads/2020/07/rohan-online-400x260-1.png"></img>
        
            {
                // <img src="https://loadcentral.com.ph/wp-content/uploads/2020/07/rohan-online-400x260-1.png"></img>
                auth ?
                    <>

                        <ul className="nav-ul">
                        {/* <img src="https://loadcentral.com.ph/wp-content/uploads/2020/07/rohan-online-400x260-1.png"></img> */}
               
                            <li><Link to='/'> Products </Link></li>
                            <li><Link to='/add'> Add Products </Link></li>
                            <li><Link to='/update:id'> Update Product</Link></li>
                            <li><Link to='/profile'> Profile </Link></li>
                            <li><Link onClick={logout} to='/signup'> Logout </Link></li></ul>
                    </> :

                    <>
                        <ul className="nav-ul1">
                            <li><Link to='/signup'> Sign Up </Link></li>
                            <li><Link to='/login'> Login </Link></li></ul>
                    </>
            }

        </>
    )
}