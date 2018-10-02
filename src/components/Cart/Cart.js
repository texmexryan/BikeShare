import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
// import Stripe from 'stripe'
import logo from '../Auth/bike.svg'
import {connect} from 'react-redux'
import {addToCart} from '../../ducks/reducer'
import {SweetAlert} from 'react-bootstrap-sweetalert'
import './Cart.css'




class Cart extends Component {
    constructor(props){
        super(props)
            this.state = {
                price: 0,
                amount: 0,
                cartItems: [],
                subtotal: 0,
                fee: 10
                
            }
        this.deleteCart = this.deleteCart.bind(this)
    }

    componentDidMount(){
        axios.get(`/api/cart`).then((res) =>{
            this.setState({
                cartItems: res.data,
            })
        let {cartItems} = this.state
        let sub = 0;
        cartItems.forEach(cartItem => {
            let cost = Number(cartItem.price)
            sub += cost
            this.setState({subtotal: sub, amount: sub})
            
        })
    })
    }

    deleteCart(id){
        let {addToCart} = this.props
        axios.delete(`/api/cart/${id}`)
        .then((res) => {
            this.setState({
                cartItems: res.data
            })
            console.log(res.data.length)
            addToCart(res.data.length)
            this.componentDidMount()
        })
        }

    onToken = (token) => {
        token.card = void 0
        axios.post('/api/payment', {token, amount: this.state.amount * 100}).then(res => {
            // console.log(res)
        })
        axios.delete('/api/clearcart').then(res => {
          if (!res.data[0]) {
            addToCart(0)
            this.componentDidMount()
          }
          
        })

        axios.post('/api/email').then(res => {
            // console.log(res.data)
            if (res.data) {
              this.props.history.push('/dashboard')
            }
          })
          alert('Confirmation email has been sent')
    
    }

    // updateAmount(){

    // }
    
    render() {
        let {fee, amount, subtotal, cartItems} = this.state
        // console.log(cartItems)
    let displayCart = cartItems.map((info, i) => {
        const {brand, price, image, id} = info
        return(
            <section key={i} className="basket">
            <p>Brand: {brand}</p>
            <p>Rate Per Day: ${price}</p>
            <img className="bike_img" src={image} alt="cart_bike" />
            {/* <button>Edit Quantity</button> */} <br/>
            <button onClick={() => this.deleteCart(id)}>Delete Cart Item</button>
            </section>
        )
    })
    
        return (
            <div className="cart">
                <h1>MY CART</h1>
            <div className="cart-table">
                <h3>Selected Rentals:</h3>
                <div>
                    {displayCart}
                </div>
            </div>

                <div  className="checkout-summary">
                <h3>Cart Summary</h3>
                <h4>Subtotal:${subtotal.toFixed(2)}</h4>
                <h4>Platform Fee: {fee}% </h4>
                <h4>Total:${(amount + (amount * .1)).toFixed(2)} </h4>


                <StripeCheckout
                name="Bike-Share"
                description="Bike-Share Rentals"
                image={logo}
                token= {this.onToken}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                amount={(amount + (amount * .1)) * 100}
            />
                </div>            
            </div>
          );
    }
}


export default connect(null, {addToCart})(Cart);