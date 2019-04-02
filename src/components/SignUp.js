import React , {Component} from 'react'
import './design.css'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
export default class SignUp extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            email:'',
            role:'',
            pwd:'',
            repwd:''
        }
    }
    dataChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    postData(){

        let name = this.state.name
        let email = this.state.email
        let role = this.state.role
        let pwd = this.state.pwd
        let repwd = this.state.repwd

        const data = {
            name,
            email,
            role,
            pwd,
            repwd
        }
        axios.post('http://localhost:3000/people',data)
        .then(res => {
            console.log(res)
            alert("form submited")
        })

    }

    render(){
        return(
        <div>
            <center className="container">
                <form onSubmit={this.postData.bind(this)}>
                    <div className="container">
                    <h1>Registration form </h1>
                    <p>Please fill all field to create an account.</p>
                
                    <input type="text" className="fields" placeholder="Enter name" value={this.state.name} name="name" required onChange={this.dataChange.bind(this)}/><br/>
                
                    <input type="text" className="fields" placeholder="Enter Email" value={this.state.email} name="email" required onChange={this.dataChange.bind(this)}/><br/>
                
                    <select className="fieldsForSelect" name="country">
                        <option value="" hidden>Choose Role</option>
                        <option value="admin">Admin</option>
                        <option value="author">Author</option>
                        <option value="default">Default</option>
                    </select><br/>

                    <input type="password" className="fields" placeholder="Enter Password" value={this.state.pwd} name="pwd" required onChange={this.dataChange.bind(this)}/><br/>

                    <input type="password" className="fields" placeholder="Repeat Password" value={this.state.repwd} name="repwd" required onChange={this.dataChange.bind(this)}/><br/>
                    
                    <center>
                        <button className="registerbtn" onSubmit={this.postData.bind(this)} >Submit</button>
                        <input type="reset" className="registerbtn" name="Reset" />
                        <p>Already have an account? <NavLink to="/" style={{color:'white'}}>Sign in</NavLink>.</p>
                    </center>
                    </div>
                </form>
            </center>
        </div>
        )
    }
}