import React , {Component} from 'react'
import './design.css'
import axios from 'axios'
import { Redirect } from 'react-router-dom';
export default class LogIn extends Component{
    constructor(){
        super()
        this.state = {
            person:[],
            email:'',
            pwd:'',
            home:false
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
        let gotData=this.state.person
        gotData.map(d => {
            if(this.state.email === d.email && this.state.pwd === d.pwd){
                this.setState({home:true})
            }
        })
    }
    dataChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        if(this.state.home){
            return(<Redirect to='./home' />)
        }
        return(
            <div className="container">
            <center>
                <h2>Welcome</h2>
                <form onSubmit={this.getData.bind(this)}>
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
                        />  
                    </center>
                </form>
            </center>
        </div>
        )
    }
}