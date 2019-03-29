import React , {Component} from 'react'
import './design.css'

export default class LogIn extends Component{

    render(){
        return(
            <div className="container">
                <h2>Review on Blog</h2>
                    <form>
                        <div className="container">
                            <input type="text" className="fields" placeholder="Enter Email" name="email" required /><br/>
                            <textarea type="password" className="fields" placeholder="Comment write here....." required ></textarea><br/>
                            <button type="submit" className="registerbtn" rows='20' cols='250'>Submit</button>
                        </div>
                    </form>
                </div>
        )
    }
}