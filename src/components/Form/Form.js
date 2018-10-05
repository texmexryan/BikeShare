import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import ImageUploader from 'react-images-upload';
import './Form.css'
// import Image from './Image'

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
        
         this.handleChange = this.handleChange.bind(this)
         this.addBike = this.addBike.bind(this)
         this.onDrop = this.onDrop.bind(this);


    }
    
    handleChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    

    addBike (){
        axios.post('/api/bike', {bBrand: this.state.bBrand, bType: this.state.bType, bImage: this.state.bImage, bPrice: this.state.bPrice, bDescription:this.state.bDescription })
        .then(res => {
            // console.log(res.data)
        this.setState({bikes: res.data,
        })})
        
      }
      onDrop(pic) {
          this.setState({
              bImage: this.state.bImage
            });
            console.log(this.state.bImage)
    }
    handleForm = () => {
        alert('Please fill out form completely.')

    }
    
    
    render() { 
        console.log('here is props', this.props, 'this is state', this.state)
        return ( 
            <div className='form-box'>   
                <div className = 'form'>
                    <div>
                        <h4 className = 'label'>Image URL:</h4>
                        <input
                            className = 'fInput'
                            value = {this.state.bImage}
                            onChange = {this.handleChange} 
                            name = 'bImage'/>
                    </div>
                    <h4 className = 'label'>Bike Brand:</h4>
                    <input
                        className = 'fInput'
                        value = {this.state.bBrand}
                        onChange = {this.handleChange} 
                        name = 'bBrand'/>
                
                <div>
                    <h4 className = 'label'>Bike Type:</h4>
                    <select name='bType' className="type" onChange = {this.handleChange} name="bType" >
                        <option value=''></option>
                        <option value='Street Bike'>Street Bike</option>
                        <option value='Mountain Bike'>Mountain Bike</option>
                        <option value='Tandem'>Tandem</option>
                        <option value='Other'>Other</option>
                    </select>
                    {/* <input
                        value = {this.state.bType}
                        onChange = {this.handleChange} 
                        name = 'bType'/> */}
                </div>
                <div>
                    <h4 className = 'label'>Bike Rental Price:</h4>
                    <input
                        className = 'fInput'
                        value = {this.state.bPrice}
                        onChange = {this.handleChange} 
                        name = 'bPrice'/>
                </div>
                <div>
                    <h4 className = 'label'>Bike Description:</h4>
                    <textarea className='area'  rows="7" cols="10"
                        value = {this.state.bDescription}
                        onChange = {this.handleChange} 
                        name = 'bDescription'/>
                </div>
                <div>
            <ImageUploader
                	withIcon={true}
                	buttonText='Choose images'
                	onChange={this.onDrop}
                	imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                    value = {this.state.bImage}
                    // value={this.props.bImage}
                    name = 'bImage'
            />
			
			
			</div>
                <br/>
            { 
            this.state.bBrand.length > 0 && this.state.bImage.length > 0 && this.state.bPrice.length > 0 && this.state.bImage.length > 0 && this.state.bType.length > 0
            ?
            // (<img className='upload' src={this.state.bImage} alt="preview"/>)
            <Link to = './dashboard'><button className = 'button2'  onClick = {this.addBike}>List Your Ride!</button></Link>
            :
            <button className = 'button2'  onClick = {this.handleForm}>List Your Ride!</button>
                // (null) 
                
            }
            </div>
            </div>
         )
    }
}
 
export default Dashboard