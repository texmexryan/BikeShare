import React, {Component} from 'react';
import logo from './bike.svg'
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

            <h1 className = 'h'>Welcome to Bike-Share!</h1>
            
            <img className = 'bike-logo' src={logo} alt="logo"/>
            
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
            <button className = 'button' onClick = {this.login}> Login</button>
            </div>
         )
    }
}
 
export default Auth;