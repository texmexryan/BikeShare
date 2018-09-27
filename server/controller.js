require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET)

module.exports = {

    getAllBikes: (req, res) => {
        const db = req.app.get('db')    //connects to DB
        // const {ownerid} = req.query
        // if (ownerid) {
        //     db.get_post_by_ownerid({id: ownerid})
        //     .then(bikes => {
        //       res.status(200).send(bikes)
        //     })
        //   } else {

        db.get_all_bikes()
        .then(bikes => {
            // console.log(bikes)
        res.status(200).send(bikes)
        }) 
        .catch(err => {
            res.status(500).send(err)
        })
    
    },

    getMyBikes: (req, res) => {
        const db = req.app.get('db')
        let {id} = req.session.user
        db.get_my_bikes([id])
        .then(bikes => {
            // console.log(bikes)
            res.status(200).send(bikes)
        })
        .catch(err => {
            res.status(500).send(err)
        })
    },

    addBike: (req, res) => {
        let {bBrand, bType, bImage, bPrice, bDescription} = req.body
        let {id} = req.session.user
        const db = req.app.get('db')
        
        db.add_bike({id, bBrand, bType, bImage, bPrice, bDescription})
        .then (bikes => {
            console.log(bikes)
            res.status(200).send(bikes)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },

    deleteBike: (req, res) => {
        let {id} = req.params
        const db = req.app.get('db')
        db.delete_bike({id})
        .then(bikes => {
        res.status(200).send(bikes)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
          });
    },

    addCart: (req,res,then) => {
        console.log(req.session.user.id)
        let user_id = req.session.user.id
        let bike_id = req.body.id
        const db = req.app.get('db');
        db.add_cart({user_id, bike_id})
        .then(items => {
            console.log(items)
            res.status(200).send(items)
        }).catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
    },
    getCart: (req, res) => {
        let id = req.session.user.id,
            db = req.app.get('db')
        db.get_cart({id})
        .then(items => {
          // console.log(items)
          res.status(200).send(items)
        })
        .catch(err => {
          console.log(err)
          res.status(500).send(err)
        })
      },

      deleteCart: (req,res,then) => {
        let {id} = req.params
        let user_id = req.session.user.id
        const db = req.app.get('db');
        db.delete_from_cart({id, user_id})
        .then (items => {
            res.status(200).send(items)
            console.log(items)
        }).catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
     },

      handlePayment: (req, res) => {
        const { amount, token:{id}} = req.body
        stripe.charges.create(
            {
                amount: amount,
                currency: "usd",
                source: id,
                description: "Test payment"
            },
            (err, charge) => {
                if(err) {
                    console.log(err)
                    return res.status(500).send(err)
                } else {
                    console.log(charge)
                    return res.status(200).send(charge)
                }
            })
        },


}