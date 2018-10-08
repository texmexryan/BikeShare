import React, { Component } from 'react';
import axios from 'axios'
import Bike from '../Bike/Bike'
// import Profile from '../Profile/Profile'
import { connect } from 'react-redux'
import { addToCart } from '../../ducks/reducer'
import './Dashboard.css'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bikes: [],
            itemsInCart: 0,
        }
        //  this.deleteBike = this.deleteBike.bind(this)
        //  this.addCart = this.addCart.bind(this)
        this.sorted = this.sorted.bind(this)
    }


    async componentDidMount() {
       await axios.get('/api/bikes')
            .then(res => {
                // console.log(res.data)
                this.setState({
                    bikes: res.data
                })
            });
    }

    //   addCart(id){
    //     let {addToCart} = this.props
    //     axios.post(`/api/cart`, {id})
    //     .then((res) => {
    //         console.log(res.data.length)
    //         addToCart(res.data.length)
    //     })
    //     }

    sorted(){
        axios.get(`/api/bikes/sorted`).then((res) => {
            this.setState({
                bikes:res.data
            })
        })
    }







    render() {
        let displayBikes = this.state.bikes.map((item, index) => {
            let { id, owner_id, brand, price, image, type, description } = item
            // console.log(item)
            return (

                <Bike
                    key={index}
                    id={id}
                    price={price}
                    image={image}
                    brand={brand}
                    type={type}
                    description={description}
                    ownerId={owner_id}

                    // location = {item.location}
                    // updateBike = {this.props.updateBike}
                    // addBike = {this.addBike}
                    deleteBike={this.deleteBike}
                    addCart={this.addCart}
                />


            )
        })
        return (
        <div className = 'body-dash'>

            <div className='sort'>
                <button className='sort-btn' onClick ={this.sorted}>Sort: Lowest Price</button>
            </div>
            {/* <div className='container'> */}
                <div className='bikes'>

                    {displayBikes}
                </div>

            {/* </div> */}
        </div>
        )
    }
}

export default connect(null, { addToCart })(Dashboard)