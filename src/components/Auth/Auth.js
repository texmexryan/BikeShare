import React, {Component} from 'react';
import logo from './generated.svg'
import './Auth.css'

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {

        } 

         
    }
    login (){
        let {REACT_APP_DOMAIN, REACT_APP_CLIENT_ID} = process.env;
        //getting this below:  'http://localhost:3005/auth/callback
        let url = `${encodeURIComponent(window.location.origin)}/auth/callback`
        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
    }


    render() { 
        return ( 
            <div className = "body">

            <h1 className = 'hh'>Welcome to BIKE-SHARE</h1>
            
            <img className = 'bike-logo' src={logo} alt="logo"/>
            
            <br/>
            <br/>
            <br/>
            <br/>
            <h2 className='greet'>Login below to find a ride!</h2>
            <br/>
            
            <button className = 'button1' onClick = {this.login}> Login</button>
            </div>
         )
    }
}
 
export default Auth;