import React , {Component} from 'react'
import './design.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { link } from 'fs';
 class MainBody extends Component{
    render(){
        return(
            <div id="bgImg">
                <Router>
                    <Links />
                    <Route path="/" component={LogIn} />
                    <Route path="/SignUp" component={SignUp} />
                </Router>
            </div>
        )
    }
}
const Links = ()=>(
    <div className="btn">
        <Link to="/"><button className="registerbtn">LogIn</button></Link>
        <Link to="/SignUp"><button className="registerbtn">SignUp</button></Link>
    </div>
)
function LogIn(){
    return(
        <center>
            <h1>Welcome</h1>
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
    )
}
function SignUp(){
    return(
        <center>
            <form>
                <div class="container">
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
                    <button type="submit" className="registerbtn">Register</button><br/>
                    <p>Already have an account? <a href="#">Sign in</a>.</p>
                </center>
                </div>
            </form>
            </center>
    )
}

export default MainBody;