import React , {Component} from 'react'

export default class SignUp extends Component{
    render(){
        return(
            <div>
                <form>
                    <input type="text" placeholder="FirstName" /><br />
                    <input type="text" placeholder="LastName" /><br />
                    <input type="text" placeholder="UserName" /><br />
                    <input type="text" placeholder="Email" /><br />
                    <input type="text" placeholder="Password" /><br />
                    <b>Role : </b><input type="radio" />Default
                    <input type="radio" />Author
                    <input type="radio" />Admin<br />
                    <input type="submit" value="Submit" /><br />
                </form>
            </div>
        )
    }
}