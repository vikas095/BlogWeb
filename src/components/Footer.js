import React , {Component} from 'react'
import './Footer.css'
export default class Footer extends Component{
    render(){
        return(
            <footer className="Footer">
                <center>
                    <h3>CONTACT</h3>
                    <a href="www.facebook.com">Facebook </a>
                    <a href="www.email.com">Email </a>
                    <a href="www.instagram.com">Instagram </a>
                    <a href="www.twitter.com">Twitter </a>
                </center>
            </footer>
        )
    }
}