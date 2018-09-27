import React, {Component} from 'react';
import logo from './bike.png'

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
            <div>
            <img src={logo} alt=""/>
            <br/>
            
            <button onClick = {this.login}>Please Login</button>
            </div>
         )
    }
}
 
export default Auth;