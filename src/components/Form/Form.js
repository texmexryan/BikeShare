import React, { Component } from 'react';
import axios from 'axios'
import './Form.css'
import Image from './Image'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            bBrand: '',
            bType: '',
            bImage: '',
            bPrice: 0,
            bDescription: '',
            // trying to disable submit if inputs not filled
            brandValid: false,
            typeValid: false,
            imageValid: false,
            priceValid: false,
            descValid: false,
            submitDisabled: true

         }
        //  this.handleChangeBrand = this.handleChangeBrand.bind(this)
        //  this.handleChangeType = this.handleChangeType.bind(this)
        //  this.handleChangeImage = this.handleChangeImage.bind(this)
        //  this.handleChangePrice = this.handleChangePrice.bind(this)
        //  this.handleChangeDesc = this.handleChangeDesc.bind(this)
         this.handleChange = this.handleChange.bind(this)
         this.addBike = this.addBike.bind(this)

    }
    
    handleChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    // handleChangeBrand (e) {
    //     let brandValid = e.target.value ? true : false
        
    //     let submitValid = this.state.brandValid && this.state.typeValid && this.state.imageValid && this.state.priceValid && this.state.descValid
    //     this.setState({
    //         bBrand: e.target.value,
    //         brandValid: brandValid,
    //         submitDisabled: !submitValid
    //         // [val.target.name]: val.target.value,   
    //     })    
    // }
    // handleChangeType (e) {
    //     let typeValid = e.target.value ? true : false
        
    //     let submitValid = this.state.brandValid && this.state.typeValid && this.state.imageValid && this.state.priceValid && this.state.descValid
    //     this.setState({
    //         bType: e.target.value,
    //         typeValid:typeValid,
    //         submitDisabled: !submitValid
    //         // [val.target.name]: val.target.value,   
    //     })    
    // }
    // handleChangeImage (e) {
    //     let imageValid = e.target.value ? true : false
    //     let submitValid = this.state.brandValid && this.state.typeValid && this.state.imageValid && this.state.priceValid && this.state.descValid
    //     this.setState({
    //         bImage: e.target.value,
    //         imageValid: imageValid,
    //         submitDisabled: !submitValid
    //         // [val.target.name]: val.target.value,   
    //     })    
    // }
    // handleChangePrice (e) {
        
    //     let priceValid = e.target.value ? true : false
    //     let submitValid = this.state.brandValid && this.state.typeValid && this.state.imageValid && this.state.priceValid && this.state.descValid
    //     this.setState({
    //         bPrice: e.target.value,
    //         priceValid: priceValid,
    //         submitDisabled: !submitValid
    //         // [val.target.name]: val.target.value,   
    //     })    
    // }
    // handleChangeDesc (e) {
        
    //     let descValid = e.target.value ? true : false
    //     let submitValid = this.state.brandValid && this.state.typeValid && this.state.imageValid && this.state.priceValid && this.state.descValid
    //     this.setState({
    //         bDescription: e.target.value,
    //         descValid: descValid,
    //         submitDisabled: !submitValid
    //         // [val.target.name]: val.target.value,   
    //     })    
    // }
    

    addBike (){
        axios.post('/api/bike', {bBrand: this.state.bBrand, bType: this.state.bType, bImage: this.state.bImage, bPrice: this.state.bPrice, bDescription:this.state.bDescription })
        .then(res => {
            console.log(res.data)
        this.setState({bikes: res.data,
        })})
        
      }
   
    
    
    
    
    render() { 
        // console.log('here is props', this.props, 'this is state', this.state)
        return ( 
            <div className='form'>   
                <div>
                    <h4 className = 'label'>Bike Brand:</h4>
                    <input
                        value = {this.state.bBrand}
                        onChange = {this.handleChange} 
                        name = 'bBrand'/>
                </div>
                <div>
                    <h4 className = 'label'>Bike Type:</h4>
                    {/* <select className="type" onChange = {this.handleChangeType} name="bType" >
                        <option value={this.state.bType}>Street Bike</option>
                        <option value={this.state.bType}>Mountain Bike</option>
                        <option value={this.state.bType}>Tandem</option>
                    </select> */}
                    <input
                        value = {this.state.bType}
                        onChange = {this.handleChange} 
                        name = 'bType'/>
                </div>
                <div>
                    <h4 className = 'label'>Image URL:</h4>
                    <input
                        value = {this.state.bImage}
                        onChange = {this.handleChange} 
                        name = 'bImage'/>
                </div>
                <div>
                    <h4 className = 'label'>Bike Rental Price:</h4>
                    <input
                        value = {this.state.bPrice}
                        onChange = {this.handleChange} 
                        name = 'bPrice'/>
                </div>
                <div>
                    <h4 className = 'label'>Bike Description:</h4>
                    <textarea  rows="10" cols="10"
                        value = {this.state.bDescription}
                        onChange = {this.handleChange} 
                        name = 'bDescription'/>
                </div>
                <Image
                bImage = {this.state.bImage}
                />
                <br/>
                <button className = 'button2' /*disabled = {this.state.submitDisabled}*/ onClick = {this.addBike}>List Your Ride!</button>
            </div>
         )
    }
}
 
export default Dashboard