import React , {Component} from 'react'
import './Footer.css'
export default class Footer extends Component{
    render(){
        return(
            <footer className="Footer">
                <center>
                    <h3>CONTACT</h3>
                    <a href="#">Facebook </a>
                    <a href="#">Email </a>
                    <a href="#">Instagram </a>
                    <a href="#">Twitter </a>
                </center>
            </footer>
        )
    }
}