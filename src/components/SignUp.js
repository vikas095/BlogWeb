import React , {Component} from 'react'
import './design.css'
import {NavLink} from 'react-router-dom'
export default class SignUp extends Component{
    render(){
        return(
        <div>
            <center className="container">
                <form>
                    <div className="container">
                    <h1>Registration form </h1>
                    <p>Please fill all field to create an account.</p>
                
                    <input type="text" className="fields" placeholder="Enter name" name="name" required /><br/>
                
                    <input type="text" className="fields" placeholder="Enter Email" name="email" required /><br/>
                
                    <select className="fieldsForSelect" name="country">
                        <option value="" selected disabled hidden>Choose Role</option>
                        <option value="admin">Admin</option>
                        <option value="author">Author</option>
                        <option value="default">Default</option>
                    </select><br/>

                    <input type="password" className="fields" placeholder="Enter Password" name="psw" required /><br/>

                    <input type="password" className="fields" placeholder="Repeat Password" name="psw-repeat" required /><br/>
                    
                    <center>
                        <button type="submit" className="registerbtn">Register</button>
                        <button type="reset" className="registerbtn">Reset</button>
                        <p>Already have an account? <NavLink to="/" style={{color:'white'}}>Sign in</NavLink>.</p>
                    </center>
                    </div>
                </form>
            </center>
        </div>
        )
    }
}