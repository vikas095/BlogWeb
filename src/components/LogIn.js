import React , {Component} from 'react'
import SignUp from './SignUp.js'
import './design.css'
export default class LogIn extends Component{

    render(){
        return(
            <div className="container">
            <center>
                <h2>Welcome</h2>
                <form>
                    <div className="container">
                        <input type="text" className="fields" placeholder="Enter Email" name="email" required /><br/>
                        <input type="password" className="fields" placeholder="Enter Password" name="psw" required /><br/>                
                        <center>
                            <button type="submit" className="registerbtn">LogIn</button>
                            <button type="submit" className="registerbtn">SignUp</button>
                        </center>
                    </div>
                </form>
            </center>
        </div>
        )
    }
}