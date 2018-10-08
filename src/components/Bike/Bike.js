import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Bike.css'

class Bike extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    
    
    
    
    
    
    render() { 
        let {id} = this.props
        return ( 
            // <div className = 'all-bikes'>
                <div className= 'bike-item'>
           <Link to = {`/bike/${id}`} ><img className = 'bike-img' src={this.props.image}/></Link>
           {/* <img src={this.props.image}/> */}
           <div className='bike-text'>
            <h2><span className='bold'>Brand:</span> {this.props.brand}</h2>
             <h2><span className='bold'>Type: </span>{this.props.type}</h2>   
            <h2><span className='bold'>Daily Rental Price:</span> ${this.props.price}</h2>
            </div>
            {/* <h4>Description: {this.props.description}</h4> */}
            {/* <button onClick={() => props.deleteBike(props.id) }>Delete</button> */}
            {/* <button onClick={() => this.props.addCart(this.props.id)}>Add to Cart</button> */}

                {/* </div> */}
                {/* <hr/> */}
            </div>
         )
    }
}
 
export default Bike