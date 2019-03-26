import React , {Component} from 'react'
import './Header.css'
export default class Header extends Component{
    render(){
        return(
            <div className="Header">
                <header>
                    <div className="topnav">
                        <h1 className="logodesign">Blog Website</h1>
                        <a href="#" style={{float:'right'}}>HELP</a>
                    </div>
                </header>
            </div>
        )
    }
}   