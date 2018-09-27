import React from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import logo from '../Auth/bike.png'
import './Nav.css'
// import {connect} from 'react-redux'



function Nav (props) {
// let {ownerId} = this.props;
    if(props.location.pathname === '/'){
        return (
            <div></div>
            )
        } else {
            
        return (
                
    <div className = 'nav'>
    <img className ='logo-header' src={logo} alt=""/><h2>BIKE-SHARE</h2>
    <Link to = '/dashboard'> <button>Home</button></Link>
    <br/>

    <Link to = '/profile'><button>Profile</button></Link>
    <br/>

    <Link to = '/new'><button>Post New Bike</button></Link>
    <br/>

    <Link to = '/cart'><button>Cart</button></Link>
    <br/>

    <button>About</button>
    <br/>
{/* // {`/profile/${ownerId}`} */}
    
    
    <a href="http://localhost:3001/logout">
    <button>Logout</button>
    </a>
    
    

    </div>


    )
}
}
// function mapStateToProps(state){
//     const {username, picture} = state
//     return {
//     username,
//     picture
   
//     }
// }

export default withRouter(Nav)
