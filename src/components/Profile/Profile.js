import React, {Component} from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import {getUserData} from '../../ducks/reducer'
import MyBike from '../Bike/MyBike'
import Nav from '../Nav/Nav'

import './Profile.css'


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            bikes: []
         }
         this.deleteBike = this.deleteBike.bind(this)
    }

    async componentDidMount() {
        
        let res = await axios.get('/api/user-data')
        console.log(res)
        //use action creator to update redux store
        this.props.getUserData(res.data)

    
        axios.get('/api/mybikes')
        .then (res => {
          console.log(res.data)
          this.setState({bikes: res.data})
        }) 
      }

      deleteBike(id) {
        axios.delete(`/api/bike/${id}`)
        .then(res => {
        this.setState({ bikes: res.data })
        });
      }





    render() { 
        let {username, picture, email} = this.props.user
        console.log(this.props.user)
        let displayMyBikes = this.state.bikes.map((item, index) => {
            let {id, owner_id, brand, price, image, type, description} = item
            // console.log(item)
            return (
                <div>
                <MyBike
                key = {index}
                id = {id}
                price = {price}
                image = {image}
                brand = {brand}
                type = {type}
                description = {description}
                ownerId = {owner_id}
                
                // location = {item.location}
                // updateBike = {this.props.updateBike}
                // addBike = {this.props.addBike}
                deleteBike = {this.deleteBike}
                />
                
                
                </div>
            
        )
        })
        return ( 
            <div>
                <h1>Profile Page:</h1>
                <hr/> 
                {
                    username ? (
                        <div className= 'profile_info'>
                            <p>Welcome {username}</p> 
                            <p>Email: {email}</p>
                           
                            <img className = 'profile_img' src={picture} alt=""/>  
                            
                        </div>
                        ) : <p>Please log in</p>
            
                 }
                {/* <a href="http://localhost:3001/logout">
                <button>Logout</button>
                </a> */}

                <section>
                My Bikes:
                <br/>
                {displayMyBikes}
                {/* <button onClick = {this.deleteBike}>Delete</button> */}
                </section>
                
            </div>
         )
    }
}
function mapStateToProps (state){
    return {
        user: state.user
    }
} 


export default connect(mapStateToProps,{getUserData})(Profile)