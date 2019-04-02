import React , {Component} from 'react'
import './Header.css'
import { NavLink } from "react-router-dom";
export default class Header extends Component{
    render(){
        return(
            <div className="Header">
                <header>
                    <div className="topnav">
                        <h1 className="logodesign">Blog Website</h1>
                        <NavLink to="/signup" style={{float:'right'}}>SignUp</NavLink>
                        <NavLink to="/" style={{float:'right'}}>LogIn</NavLink>
                    </div>
                </header>
            </div>
        )
    }
}   