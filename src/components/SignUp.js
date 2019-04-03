import React , {Component} from 'react'
import './design.css'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
export default class SignUp extends Component{
    constructor(){
        super()
        this.state={
            fields: {},
            errors: {}
        }
    }
    handleChange(e){
        let fields = this.state.fields
        fields[e.target.name] = e.target.value
        this.setState({
            fields
        })
    }
    postData(e){
        e.preventDefault()

        let name = this.state.fields.name
        let email = this.state.fields.email
        let role = this.state.fields.role
        let pwd = this.state.fields.pwd
        let repwd = this.state.fields.repwd

        const data = {
            name,
            email,
            role,
            pwd,
            repwd
        }

        if(this.validateForm()){
            console.log("validate form fun working")
            axios.post('http://localhost:3000/people',data)
            .then(res => {
                console.log(res)
            }).catch(err=>{console.log(err)})
            let fields = {}
            fields["name"] = ''
            fields["email"] = ''
            fields["role"] = ''
            fields["pwd"] = ''
            fields["repwd"] = ''
            this.setState({fields:fields})
            alert("Your form submitted. Please logIn")
        }
    }
    validateForm(){
        console.log("validate form is called")
        let fields = this.state.fields
        let errors = {}
        let formIsValid = true

        if(typeof fields["name"] !== "undefined"){
            if(!fields["name"].match(/^[a-zA-Z ]*$/)){
                formIsValid = false
                errors["name"] = "*Please enter alphabat character only."
            }
        }

        if(typeof fields["email"] !== "undefined"){
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
            if(!pattern.test(fields["email"])){
                formIsValid = false;
                errors["email"] = "*Please enter valid email-ID."
            }
        }

        if(typeof fields["pwd"] !== "undefined"){
            if(!fields["pwd"].match(/^[(a-z) && (A-Z) && (0-9) ]*$/)){
                formIsValid = false
                errors["pwd"] = "*Please enter Alphabat and Number for password."
            }
        }

        if(typeof fields["repwd"] !== "undefined"){
            if(!fields["repwd"].match(/^[(a-z) && (A-Z) && (0-9) ]*$/)){
                formIsValid = false
                errors["repwd"] = "*Please enter Alphabat and Number for password."
            }
        }
        this.setState({
            errors: errors
        })
        return formIsValid
    }

    render(){
        return(
        <div>
            <center className="container">
                <form onSubmit={this.postData.bind(this)}>
                    <div className="container">
                    <h1>Registration form </h1>
                    <p>Please fill all field to create an account.</p>
                    <div className="errorMsg">{this.state.errors.name}</div>
                    <input type="text" className="fields" placeholder="Enter name" value={this.state.name} name="name" required onChange={this.handleChange.bind(this)}/><br/>
                    <div className="errorMsg">{this.state.errors.email}</div>
                    <input type="text" className="fields" placeholder="Enter Email" value={this.state.email} name="email" required onChange={this.handleChange.bind(this)}/><br/>
                    <div className="errorMsg">{this.state.errors.role}</div>
                    <select className="fieldsForSelect" name="role">
                        <option value="" hidden>Choose Role</option>
                        <option value="admin">Admin</option>
                        <option value="author">Author</option>
                        <option value="default">Default</option>
                    </select><br/>
                    <div className="errorMsg">{this.state.errors.pwd}</div>
                    <input type="password" className="fields" placeholder="Enter Password" value={this.state.pwd} name="pwd" required onChange={this.handleChange.bind(this)}/><br/>
                    <div className="errorMsg">{this.state.errors.repwd}</div>
                    <input type="password" className="fields" placeholder="Repeat Password" value={this.state.repwd} name="repwd" required onChange={this.handleChange.bind(this)}/><br/>
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