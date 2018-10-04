require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET),
nodemailer = require('nodemailer')

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

    getOneBike: (req, res) => {
        // console.log('shots fired')
        const db = req.app.get('db')
        let {id} = req.params
        db.get_one_bike({id}).then(bike => {
          // console.log(bike)
          res.status(200).send(bike)
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
    updateBike: (req, res) => {
        let { brand, type, image, price, description, owner_id } = req.body;
        let { id } = req.params;
        // console.log('session', req.session)
        // console.log('body', req.body)
        const db = req.app.get('db');
    
        // if (user_id === req.session.user_id) {
        db.update_my_bike({ brand, type, image, price, description, owner_id, id })
          .then(bikes => {
            res.status(200).send(bikes);
          })
          .catch(err => {
            console.log(err);
            res.status(500).send(err);
          })
        // }else {
        //   res.status(500).send('not your post dingus')
        // }
      },
    

    deleteBike: (req, res) => {
         console.log('shot fired!')
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

    addCart: (req,res) => {
        console.log(req.session.user.id)
        let user_id = req.session.user.id
        let bike_id = req.body.id
        let {start_date, end_date} = req.body
        const db = req.app.get('db');
        db.add_cart({user_id, bike_id, start_date, end_date})
        .then(items => {
            console.log(items)
            res.status(200).send(items)
        }).catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
    },
    getCart: (req, res) => {
        // console.log(req.session.user.id)
        let id = req.session.user.id,
            db = req.app.get('db')
        db.get_cart({id})
        .then(items => {
        //   console.log(items)
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

     clearCart: (req, res) => {
         console.log('killshot')
        let id = req.session.user.id,
            db = req.app.get('db')
    
        db.clear_cart({id}).then(items => {
          // console.log(items)
          res.status(200).send(items)
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
                    // console.log(charge)
                    return res.status(200).send(charge)
                }
            })
        },

        sendEmail: (req, res) => {
        let {username, email} = req.session.user
        let {EMAIL, EPW} = process.env
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 25,
            secure: false,
            auth: {
              user: EMAIL,
              pass: EPW,
            },
            tls: {
                rejectUnauthorized: false,
            }
          });
          
          var mailOptions = {
            from: 'bike-share@gmail.com',
            to: email,
            subject: 'BIKE-SHARE: Reservation(s) Confirmed',
            text: `Hello, ${username}! Your bike reservation is confirmed! Remember to get touch with the owner to arrange pick-up. Happy cycling!</h1>
            Owner's contact information: phone & email.`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
                console.log('email sent')
              res.status(200).send('Email sent');
            }
          })
        },
        


}