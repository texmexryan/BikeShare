import React, { Component } from 'react';
import axios from 'axios'
import {Calender, DateRange } from 'react-date-range'
import {connect} from 'react-redux'
import {addToCart} from '../../ducks/reducer'

class BikeView extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            bike: [],
         }
         this.addCart = this.addCart.bind(this)
         this.handleSelect = this.handleSelect.bind(this)
    }
    
    componentDidMount() {
        let {id} = this.props.match.params
        axios.get(`/api/bike/${id}`)
        .then (res => {
          console.log(res.data)
          this.setState({bike: res.data})
        }) 
      }

      addCart(id){
        let {addToCart} = this.props
        axios.post(`/api/cart`, {id})
        .then((res) => {
            console.log(res.data.length)
            addToCart(res.data.length)
        })
        }

        handleSelect (val) {
            this.setState({
                [val.target.name]: val.target.value,   
            })    
        }
    
    
    
    render() { 
        let {bike} = this.state;
        console.log('hey this bike',bike)
        let displayBike = bike.map((item, i) => {
        let {id, owner_id, brand, price, image, type, description} = item
        
        return (

            <div key = {i} className = 'single_bike'>
                
                <img src={image} alt="bike"/>
                <h3>Brand: {brand}</h3>
                <h4>Bike Type: {type}</h4>
                <h4>Price: {price}</h4>
                <h4>Description: {description}</h4>
                <h4>Brand: {brand}</h4>
                <button onClick={() => this.addCart(id)}>Add to Cart</button>

            </div>


        )
        })
        return ( 
            <div>
                {/* <DateRange
                onChange = {handleSelect}
                
                /> */}
                {displayBike}
            </div>
         )
    }
}
 
export default connect(null, {addToCart})(BikeView)