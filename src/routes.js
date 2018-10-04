import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard'
import Profile from './components/Profile/Profile'
import Form from './components/Form/Form'
import Bike from './components/Bike/Bike'
import Cart from './components/Cart/Cart'
import BikeView from './components/Bike/BikeView'
import About from './components/About/About'
import Image from './components/Form/Image'



export default (

<Switch>

    <Route exact path = '/' component = {Auth} />
    <Route path = '/dashboard' component = {Dashboard} />
    <Route  path = '/profile' component = {Profile} />
    <Route path = '/new' component = {Form} />
    <Route  path = '/bike/:id' component = {BikeView} />
    <Route path ='/cart' component = {Cart} />
    <Route path ='/about' component = {About} />


    <Route path ='/img' component = {Image} />
    {/* <Route path ='/bike' component = {Cart} /> */}

    {/* profile/:id */}




</Switch>

)