import React , {Component} from 'react'
import './design.css'
import { BrowserRouter, Route, NavLink } from "react-router-dom";

export default class LogIn extends Component{

    render(){
        return(
            <div className="container">
            <center>
                <h2>Welcome</h2>
                <form>
                    <div>
                        <input type="text" className="fields" placeholder="Enter Email" name="email" required /><br/>
                        <input type="password" className="fields" placeholder="Enter Password" name="psw" required /><br/>                
                        <center>
                            <NavLink to="/home"><button type="submit" className="registerbtn">LogIn</button></NavLink>
                            
                        </center>
                    </div>
                </form>
            </center>
        </div>
        )
    }
}