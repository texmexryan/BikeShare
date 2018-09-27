import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard'
import Profile from './components/Profile/Profile'
import Form from './components/Form/Form'
import Bike from './components/Bike/Bike'
import Cart from './components/Cart/Cart'
import BikeView from './components/Bike/BikeView'



export default (

<Switch>

    <Route exact path = '/' component = {Auth} />
    <Route path = '/dashboard' component = {Dashboard} />
    <Route  path = '/profile' component = {Profile} />
    <Route path = '/new' component = {Form} />
    <Route  path = '/bike/:id' component = {BikeView} />
    <Route path ='/cart' component = {Cart} />
    {/* <Route path ='/bike' component = {Cart} /> */}

    {/* profile/:id */}




</Switch>

)