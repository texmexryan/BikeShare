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
        this.props.updateBike(this.props.id, this.props.owner_id, this.props.brand, this.props.type, this.props.image, this.props.price, this.props.description);
        this.setState({ editing: false });
    }




    render() {
        let { editing } = this.state;
        let { id } = this.props;
        return (
            <div className='mybike'>
                <div className='bike-values'>
                    <div>
                        <img className='mybike-img' src={this.props.image} />
                    </div>
                    <form className='form'>
                        {editing ? (
                            <div>
                                {/* <input type="text" onChange={this.handleInput} value={this.state.editImage} /> */}
                                <input type="text" name='editBrand' onChange={this.handleInput} value={this.state.editBrand} />
                                <input type="text" name='editType' onChange={this.handleInput} value={this.state.editType} />
                                <input type="text" name='editPrice' onChange={this.handleInput} value={this.state.editPrice} />
                                <input type="text" name='editDesc' onChange={this.handleInput} value={this.state.editDesc} />
                            </div>
                        ) : (
                                <div>
                                    <h2>Brand: {this.props.brand}</h2>
                                    <h2>Type: {this.props.type}</h2>
                                    <h2>Rental Price: ${this.props.price}</h2>
                                    <h3>Description: {this.props.description}</h3>
                                </div>
                            )

                        }
                        {/* <input type="reset" /> */}
                    <button className = 'my-btns' onClick={editing ? this.handleSave : this.toggleEdit}>{editing ? 'Save' : 'Edit'}</button>
                    <button className = 'my-btns' onClick={() => { this.props.deleteBike(id) }}>Delete</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default MyBike