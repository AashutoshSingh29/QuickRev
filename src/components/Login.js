import React from "react";

const Login = () => {
   return(
        <div className="login-Container">
            <span className="login-span">Sign Up</span>
            <input className="login-input" type="text" placeholder="Enter Username"/>
            <input className="login-input" type="password" placeholder="Enter Password" />
        </div>
   ) 
}

export default Login;