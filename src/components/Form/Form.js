import React, { Component } from 'react';
import axios from 'axios'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            bBrand: '',
            bType: '',
            bImage: '',
            bPrice: 0,
            bDescription: ''

         }
         this.handleChange = this.handleChange.bind(this)
         this.addBike = this.addBike.bind(this)

    }
    
    handleChange (val) {
        this.setState({
            [val.target.name]: val.target.value,   
        })    
    }

    addBike (){
        axios.post('/api/bike', {bBrand: this.state.bBrand, bType: this.state.bType, bImage: this.state.bImage, bPrice: this.state.bPrice, bDescription:this.state.bDescription })
        .then(res => {
            console.log(res.data)
        this.setState({bikes: res.data,
        })})
        
      }
   
    
    
    
    
    render() { 
        console.log('here is props', this.props, 'this is state', this.state)
        return ( 
            <div>   
                <div>
                    <h4>Bike Brand:</h4>
                    <input
                        value = {this.state.bBrand}
                        onChange = {this.handleChange} 
                        name = 'bBrand'/>
                </div>
                <div>
                    <h4>Bike Type:</h4>
                    <input
                        value = {this.state.bType}
                        onChange = {this.handleChange} 
                        name = 'bType'/>
                </div>
                <div>
                    <h4>Image URL:</h4>
                    <input
                        value = {this.state.bImage}
                        onChange = {this.handleChange} 
                        name = 'bImage'/>
                </div>
                <div>
                    <h4>Bike Rental Price:</h4>
                    <input
                        value = {this.state.bPrice}
                        onChange = {this.handleChange} 
                        name = 'bPrice'/>
                </div>
                <div>
                    <h4>Bike Description:</h4>
                    <input
                        value = {this.state.bDescription}
                        onChange = {this.handleChange} 
                        name = 'bDescription'/>
                </div>
                <br/><br/>
                <button onClick = {this.addBike}>Post Bike!</button>
            </div>
         )
    }
}
 
export default Dashboard