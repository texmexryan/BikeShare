import React, { Component } from 'react';
import axios from 'axios'
import './Claim.css'


class Claim extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            area: '',

         }
        
         this.handleChange = this.handleChange.bind(this)


    }
    
    handleChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    

    handleForm = () => {
        
        alert('Claim has been submitted. Thank you.')
       

    }
    
    
    render() { 
        console.log('here is props', this.props, 'this is state', this.state)
        return ( 
            <div className='form-box'>   
                <div className = 'new-form'>
                    
                     
                
                    <h4 className = 'label'>Claim Info:</h4>
                    <textarea className='area-claim'  rows="7" cols="10"
                        value = {this.state.area}
                        onChange = {this.handleChange} 
                        name = 'area'/>
                
               
            </div>
            <button onClick ={this.handleForm} className = 'button3'>Submit Claim</button>
            
            
                
            
            
            </div>
         )
    }
}
 
export default Claim