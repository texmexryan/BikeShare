import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
import logo from '../Auth/generated.svg'
import removeX from './x-button.svg'
import {connect} from 'react-redux'
import {addToCart} from '../../ducks/reducer'
// import {SweetAlert} from 'react-bootstrap-sweetalert'
import moment from 'moment'
import './Cart.css'




class Cart extends Component {
    constructor(props){
        super(props)
            this.state = {
                // price: 0,
                amount: 0,
                cartItems: [],
                subtotal: 0,
                fee: 10
                
            }
        this.deleteCart = this.deleteCart.bind(this)
    }

     componentDidMount(){
        // if (cartItems[0]) {
             axios.get(`/api/cart`).then((res) =>{
            let sub = 0;
            let copyCart = res.data.map(e=>{
            let a = moment(e.start_date)
            let b = moment(e.end_date)
            e.time = b.diff(a, 'days')
            e.total = e.time * e.price 
            sub += e.total
            return e;
            })

            // console.log(res.data)
            this.setState({
                cartItems: copyCart,
                subtotal: sub,
                amount: sub,
            })
        })}


    deleteCart(id){
        let {addToCart} = this.props
        axios.delete(`/api/cart/${id}`)
        .then((res) => {
            this.setState({
                cartItems: res.data
            })
            // console.log(res.data.length)
            addToCart(res.data.length)
            this.componentDidMount()
        })
        }

    onToken = (token) => {
        let {addToCart} = this.props;
        token.card = void 0
        axios.post('/api/payment', {token, amount: this.state.amount * 100}).then(res => {
            // console.log(res)
        })
        axios.delete('/api/clearcart').then(res => {
            console.log(res.data)
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
        const {brand, price, image, start_date, end_date, id} = info
        
    
        
        return(
            <section key={i} className="basket">
            <div className='img-brand'>
                <img className="bike_img" src={image} alt="cart_bike" />
            <p className='bold brand-cart'> {brand}</p>
            </div>
            <p>Amount of Days: {info.time}</p>
            <p>Total Cost: ${info.total}
                
            </p>
            <div>
            <img className='cart-delete' onClick={() => this.deleteCart(id)} src={removeX} alt="remove"/>
            </div>
            </section>
        )
    })
    
        return (
            <div className="cart cart-wrapper">
                {/* <h1>MY CART</h1> */}
            <div className="cart-table">
                <h1 className='bold'>Selected Rentals:</h1>
                    {displayCart}
                <div  className="checkout-summary">
                <h3><span className='bold'>Cart Summary</span></h3>
                <h4>Subtotal:${subtotal.toFixed(2)}</h4>
                <h4 className='tooltip'>Platform Fee: {fee}% (what's this?)
                <span className='tiptext'>Small fee to help us out for hosting a place to share/process your bike.</span>
                </h4>
                <br/>
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

            </div>
          );
    }
}


export default connect(null, {addToCart})(Cart);