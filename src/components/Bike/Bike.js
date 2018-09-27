import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Bike extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    
    
    
    
    
    
    render() { 
        return ( 
            <div className = 'all_bikes'>
                <div className= 'bike_item'>
           {/* <Link to = {`/bike/${id}`} ><img src={this.props.image}/></Link> */}
           <img src={this.props.image}/>
            <h2>Brand: {this.props.brand}</h2>
             <h2>Type: {this.props.type}</h2>   
            <h2>Rental Price: ${this.props.price}</h2>
            <h4>Description: {this.props.description}</h4>
            {/* <button onClick={() => props.deleteBike(props.id) }>Delete</button> */}
            <button onClick={() => this.props.addCart(this.props.id)}>Add to Cart</button>

                </div>
                <hr/>
            </div>
         )
    }
}
 
export default Bike