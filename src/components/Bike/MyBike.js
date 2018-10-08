import React, { Component } from 'react';
// import axios from 'axios'
import './Bike.css'

class MyBike extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            editBrand: props.brand,
            editType: props.type,
            editPrice: props.price,
            editImage: props.image,
            editDesc: props.description,

        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this)
    }

    toggleEdit() {
        this.setState({ editing: !this.state.editing });
    }
    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value,

        });
    }

    handleSave() {
        // console.log(this.props)
        this.props.updateBike(this.props.id, this.state.editBrand, this.state.editType, this.state.editPrice, this.state.editDesc);
        this.setState({ editing: false });
    }




    render() {
        // console.log('staaaaate',this.state)

        let { editing } = this.state;
        let { id } = this.props;
        return (
            <div className='mybike'>
                <div className='bike-values'>
                    
                        <img className='mybike-img' src={this.props.image} />
                    
                    <div className='form'>
                        {editing ? (
                            <div>
                                {/* <input type="text" onChange={this.handleInput} value={this.state.editImage} /> */}
                                <input className='edit-input'type="text" name='editBrand' onChange={this.handleInput} value={this.state.editBrand} />
                                <input className='edit-input'type="text" name='editType' onChange={this.handleInput} value={this.state.editType} />
                                <input className='edit-input'type="text" name='editPrice' onChange={this.handleInput} value={this.state.editPrice} />
                                <textarea className='edit-input-area' type="text" name='editDesc' onChange={this.handleInput} value={this.state.editDesc} />
                            </div>
                        ) : (
                                <div >
                                    <h2><span className='bold'>Brand:</span> {this.props.brand}</h2>
                                    <hr/>
                                    <h2><span className='bold'>Type:</span> {this.props.type}</h2>
                                    <hr/>
                                    <h2><span className='bold'>Rental Price: </span> ${this.props.price}</h2>
                                    <hr/>
                                    <h3><span className='bold'>Description:</span>  {this.props.description}</h3>
                                    <hr/>
                                </div>
                            )

                        }
                        {/* <input type="reset" /> */}
                        <span>
                    <button className = 'my-btns' onClick={editing ? this.handleSave : this.toggleEdit}>{editing ? 'Save' : 'Edit'}</button>
                    <button className = 'my-btns' onClick={() => { this.props.deleteBike(id) }}>Delete</button>
                    </span>
                    </div>
                </div>

            </div>
        )
    }
}

export default MyBike