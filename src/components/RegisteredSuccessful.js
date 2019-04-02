import React from 'react'
import {  NavLink } from 'react-router-dom/cjs/react-router-dom';

const RegisteredSuccessful = ()=>{
    return(
        <div>
            <center>
                <h2>Registration Successful...</h2>
                <h5>Click for <NavLink to="/" style={{color:'white'}}>SignIn</NavLink>.</h5>
            </center>
        </div>
    )
}

export default RegisteredSuccessful