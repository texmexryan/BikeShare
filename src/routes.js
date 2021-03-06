import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard'
import Profile from './components/Profile/Profile'
import Form from './components/Form/Form'
import Cart from './components/Cart/Cart'
import BikeView from './components/Bike/BikeView'
import About from './components/About/About'
import Policy from './components/About/Policy'
import Image from './components/Form/Image'
import Faq from './components/About/Faq'
import Claim from './components/About/Claim'



export default (

<Switch>

    <Route exact path = '/' component = {Auth} />
    <Route path = '/dashboard' component = {Dashboard} />
    <Route  path = '/profile' component = {Profile} />
    <Route path = '/new' component = {Form} />
    <Route  path = '/bike/:id' component = {BikeView} />
    <Route path ='/cart' component = {Cart} />
    <Route path ='/about/howitworks' component = {About} />
    <Route path ='/about/policies' component = {Policy} />
    <Route path ='/about/faq' component = {Faq} />
    <Route path ='/about/claim' component = {Claim} />


    <Route path ='/img' component = {Image} />
    {/* <Route path ='/bike' component = {Cart} /> */}

    {/* profile/:id */}




</Switch>

)