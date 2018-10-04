import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {addToCart} from '../../ducks/reducer'
import logo from '../Auth/generated.svg'
import './Nav.css'
import cartImage from './cart.svg'
// import {connect} from 'react-redux'



class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }

    componentDidMount () {
        let {addToCart} = this.props
        axios.get('/api/cart').then(res => {
        console.log(res.data.length)
        addToCart(res.data.length)
        })
      }



    render() { 
let {itemsInCart} = this.props;

    if(this.props.location.pathname === '/'){
        return (
            <div></div>
            )
        } else {
            
        return (
                
    <div className = 'nav'>
    <section>
    <img className ='logo-header' src={logo} alt=""/>
    <h1 className = 'h'>BIKE-SHARE</h1>
    </section>
    <div className = 'nav-links'>

    <Link className = 'nav-text' to = '/dashboard'> Home </Link>
    <br/>

    <Link className = 'nav-text' to = '/profile'>Profile</Link>
    <br/>

    
    <div className= 'dropdown'>
    <Link className = 'nav-text' to = '/about'>About </Link>
    {/* <br/> */}
        <div className = 'dropdown-content'>
            <h2>How It works</h2>
            
            <h2>Policies</h2>

        </div>

    </div>
    
    
    <a className = 'nav-text' href={process.env.REACT_APP_LOGOUT}>
    Logout
    </a>
    
    <Link to = '/cart'><img className = 'cart-pic' src={cartImage} alt="cart"/></Link>
    
    <Link to = '/cart'><h6 className = 'cart-num'>{itemsInCart}</h6></Link>
    
    <Link className = 'nav-post' to = '/new'><Link to = '/about'></Link>Post Bike</Link>
    
    </div>

    </div>


    )
}
}
}
function mapStateToProps(state){
    const {itemsInCart} = state
    return {
    itemsInCart,
   
    }
}

export default connect(mapStateToProps,{addToCart})(withRouter(Nav))
