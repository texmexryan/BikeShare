import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { getUserData } from '../../ducks/reducer'
import MyBike from '../Bike/MyBike'
// import {addToCart} from '../../ducks/reducer'

import './Profile.css'


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bikes: []
        }
        this.deleteBike = this.deleteBike.bind(this)
        this.updateBike = this.updateBike.bind(this)
    }

    async componentDidMount() {

        let res = await axios.get('/api/user-data')
        // console.log(res)
        //use action creator to update redux store
        this.props.getUserData(res.data)


        axios.get('/api/mybikes')
            .then(res => {
                // console.log(res.data)
                this.setState({ bikes: res.data })
            })
    }

    updateBike(id, brand, type, price, description) {
        // console.log(id, brand, type, price, description)
        axios.put(`/api/bike/${id}`, { brand: brand, type: type, price: price, description: description })
            .then(res => {

                this.setState({ bikes: res.data })
            })
    }
    deleteBike(id) {
        axios.delete(`/api/bike/${id}`)
            .then(res => {
                this.setState({ bikes: res.data })
            });
    }





    render() {
        let { bikes } = this.state;
        let { username, picture, email } = this.props.user
        // console.log(this.props.user)
        let displayMyBikes = bikes.map((item, index) => {
            let { id, owner_id, brand, price, image, type, description } = item
            // console.log(item)
            return (
                <div key={index} >
                    <MyBike

                        id={id}
                        price={price}
                        image={image}
                        brand={brand}
                        type={type}
                        description={description}
                        ownerId={owner_id}
                        updateBike={this.updateBike}

                        // location = {item.location}
                        // updateBike = {this.props.updateBike}
                        // addBike = {this.props.addBike}
                        deleteBike={this.deleteBike}
                    />


                </div>

            )
        })
        return (
            <div className='profile-box'>
                {
                    username ? (
                        <div className='profile-info'>
                            <div className='circle'>
                                <img className='profile-img' src={picture} alt="" />
                            </div>
                            <div>
                            <p>Welcome {username}!</p>
                            </div>
                            <div>
                            <p>Email: {email}</p>
                            </div>
                            
                            
                        </div>
                        
                    ) : <p className='login-msg' >Please log in! </p>
                    

                }
                

                <div className='mybike-container'>

                    
                    {displayMyBikes}
                </div>

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps, { getUserData })(Profile)