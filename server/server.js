require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const axios = require('axios')
const massive = require('massive')
const ctrl = require('./controller')

const app = express()
app.use(bodyParser.json())

const {
    SERVER_PORT,
    SESSION_SECRET,
    REACT_APP_DOMAIN,
    REACT_APP_CLIENT_ID,
    CLIENT_SECRET,
    CONNECTION_STRING,
    // ENVIRONMENT,

} = process.env;

massive(CONNECTION_STRING).then(db => app.set('db', db))


app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
app.get('/auth/callback', async (req,res) => {
    //code --> req.query.code
    let payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`  // is localhost:3005  just using js to refer to it
    }
    //post request with code for token
    let tokenRes = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload)
    // use token to get user data
    let userRes = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${tokenRes.data.access_token}`)


    const db = req.app.get('db')
    const {email, name, picture, sub} = userRes.data
    // above this point is basically Auth0 process

    let foundUser = await db.find_user([sub])   //db queries return an array of object(s).. array with one object this case
    if (foundUser[0]){
        req.session.user = foundUser[0]
    }else {
        let createdUser = db.create_user([name, email, picture, sub])
        // [ {name, email, picture, auth_id....} ]
        req.session.user = createdUser[0]
    }

    // put user data on session
    // req.session.user = userRes.data
    res.redirect('/#/dashboard')
})

/////////////   user  & logout   endpoints

app.get('/api/user-data', (req, res) => {
    // console.log(req.session.user)
    if (req.session.user){
        res.status(200).send(req.session.user)
    }else {
        res.status(401).send('Please log in.')
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('http://localhost:3000/')
})
///////// endpoints 

app.get('/api/bikes', ctrl.getAllBikes)
app.post('/api/bike', ctrl.addBike)
app.get('/api/mybikes', ctrl.getMyBikes)
app.get('/api/bike/:id', ctrl.getOneBike)


app.delete('/api/bike/:id', ctrl.deleteBike)

app.post('/api/cart', ctrl.addCart)
app.get('/api/cart', ctrl.getCart)
app.delete('/api/cart/:id', ctrl.deleteCart)
app.delete('api/clearcart', ctrl.clearCart)


///////// STRIPE endpoint 
app.post('/api/payment', ctrl.handlePayment)

///// send email endpoint
app.post('/api/email', ctrl.sendEmail)


app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`)
    })