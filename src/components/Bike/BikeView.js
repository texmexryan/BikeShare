import React, { Component } from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import {addToCart} from '../../ducks/reducer'
import './Bike.css'

class BikeView extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            bike: [],
            startDate: '',
            endDate: '',
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
        let {startDate, endDate} = this.state
        axios.post(`/api/cart`, {id, start_date: startDate, end_date: endDate})
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
        console.log(this.state)
        let displayBike = bike.map((item, i) => {
        let {id, owner_id, brand, price, image, type, description} = item
        
        return (

            <div key = {i} className = 'single-bike'>
                <h1 className='pick-dates-text'>- Pick days you would like to use bike -</h1>
                
                <img className='bikeview-img' src={image} alt="bike"/>
                <div className='single-info'>
                <h4><span className='bold'>Brand:</span> {brand}</h4>
                <h4><span className='bold'>Bike Type:</span> {type}</h4>
                <h4><span className='bold'>Price/day:</span> ${price}</h4>
                <h4><span className='bold'>Description:</span> {description}</h4>
                </div>
                <br/>

                <input className ='date-input' type="date"  onChange={e => this.setState({startDate: e.target.value})}/>
                <input className ='date-input' type="date" onChange={e => this.setState({endDate: e.target.value})}/>
                    <br/>
                <button className='button2' onClick={() => this.addCart(id)}>Add to Cart</button>
            </div>


        )
        })
        return ( 
            <div className='bike-container'>
                
                {displayBike}
            </div>
         )
    }
}
 
export default connect(null, {addToCart})(BikeView)