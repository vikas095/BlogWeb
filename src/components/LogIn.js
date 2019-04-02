import React , {Component} from 'react'
import './design.css'
import axios from 'axios'

export default class LogIn extends Component{
    constructor(){
        super()
        this.state = {
            person:[],
            email:'',
            pwd:''
        }
    }
    getData(e){
        e.preventDefault()
        axios.get('http://localhost:3000/people')
        .then((res) =>{
            console.log(res.data)
            this.setState({
                person: res.data
            })
        })
    }
    checkData(){
        let gotData=this.state.person
        gotData.map(d => {
            if(this.state.email === d.email && this.state.pwd === d.pwd){
                console.log("if is working")
            }
            else {
                alert("Email and Password is not correct...")
            }
        })
    }
    dataChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return(
            <div className="container">
            <center>
                <h2>Welcome</h2>
                <form onSubmit={this.getData.bind(this)}>
                    <div>
                        <input 
                            type="text" 
                            className="fields" 
                            placeholder="Enter Email" 
                            name="email" 
                            value={this.state.email} 
                            onChange={this.dataChange.bind(this)} 
                            required 
                        /><br/>
                        <input 
                            type="password" 
                            className="fields" 
                            placeholder="Enter Password" 
                            name="pwd" 
                            value={this.state.pwd}
                            onChange={this.dataChange.bind(this)} 
                            required 
                        /><br/>                
                        <center>
                            <input 
                                type="submit" 
                                value="LogIn" 
                                className="registerbtn" 
                                onClick={this.dataChange.bind(this)} 
                                onChange={this.checkData()}
                            />  
                        </center>
                    </div>
                </form>
            </center>
        </div>
        )
    }
}