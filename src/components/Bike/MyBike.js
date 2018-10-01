import React, { Component } from 'react';
import axios from 'axios'

class MyBike extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    
    
    
    
    
    
    render() { 
        let {id} = this.props;
        return ( 
            <div className = 'all_bikes'>
                <div className= 'bike_item'>
            <img src={this.props.image}/>
            <h2>Brand: {this.props.brand}</h2>
             <h2>Type: {this.props.type}</h2>   
            <h2>Rental Price: ${this.props.price}</h2>
            {/* <h4>Description: {this.props.description}</h4> */}
            <button onClick={() => {this.props.deleteBike(id)} }>Delete</button>
            {/* <button onClick={() => {props.addCart(props.id)}}>Add to Cart</button> */}

                </div>
                <hr/>
            </div>
         )
    }
}
 
export default MyBike