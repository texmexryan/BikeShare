import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
import logo from '../Auth/bike.png'
import {connect} from 'react-redux'
import {addToCart} from '../../ducks/reducer'
// import {connect} from 'react-redux'
// import removeFromShopCart from '../../ducks/reducer'
import './Cart.css'




class Cart extends Component {
    constructor(props){
        super(props)
            this.state = {
                price: 0,
                amount: 10,
                cartItems: [],
                subtotal: 0,
                fee: 5
                
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
            this.setState({subtotal: sub.toFixed(2)})
            this.setState({amount: (sub + this.state.fee).toFixed(2)})
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
        axios.post('/api/payment', {token, amount: (this.state.amount + this.state.fee) * 100}).then(res => {
            console.log(res)
        })
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
            <p>Rate Total: ${price}</p>
            <img className="bike_img" src={image} alt="cart_bike" />
            <button>Edit Quantity</button>
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
                <h4>Subtotal:${subtotal}</h4>
                <h4>Platform Fee: {fee} </h4>
                <h4>Total:${amount}</h4>


                <StripeCheckout
                name="Bike-Share"
                description="Bike-Share Rentals"
                image={logo}
                token= {this.onToken}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                amount={this.state.amount * 100}
            />
                </div>            
            </div>
          );
    }
}


export default connect(null, {addToCart})(Cart);