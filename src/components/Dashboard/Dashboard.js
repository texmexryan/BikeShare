import React, { Component } from 'react';
import axios from 'axios'
import Bike from '../Bike/Bike'
import Profile from '../Profile/Profile'
import {connect} from 'react-redux'
import {addToCart} from '../../ducks/reducer'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            bikes: [],
            itemsInCart: 0,
         }
        //  this.deleteBike = this.deleteBike.bind(this)
         this.addCart = this.addCart.bind(this)
    }

    
    componentDidMount () {
        axios.get('/api/bikes')
        .then(res => {
            // console.log(res.data)
            this.setState({
            bikes: res.data
         })
        });
      }

      addCart(id){
        let {addToCart} = this.props
        axios.post(`/api/cart`, {id})
        .then((res) => {
            console.log(res.data.length)
            addToCart(res.data.length)
        })
        }

      

      
    
    
    
    
    
    render() { 
        let displayBikes = this.state.bikes.map((item, index) => {
            let {id, owner_id, brand, price, image, type, description} = item
            // console.log(item)
            return (
            
                <Bike
                key = {index}
                id = {id}
                price = {price}
                image = {image}
                brand = {brand}
                type = {type}
                description = {description}
                ownerId = {owner_id}
                
                // location = {item.location}
                // updateBike = {this.props.updateBike}
                addBike = {this.addBike}
                deleteBike = {this.deleteBike}
                addCart = {this.addCart}
                />
                
            
        )
        })
        return ( 
            <div>
            <h3>
            AVAILABLE BIKES:
            </h3>
            <br/>
            
            {displayBikes}
            <div>
            {/* <Profile
            deleteBike = {this.deleteBike}
            /> */}
            </div>
            </div>
         )
    }
}
 
export default connect(null, {addToCart})(Dashboard)