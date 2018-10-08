import React from 'react'
import './About.css'





export default function About () {
  return (

  <main className = 'about-container'>
    
    <div className='banner'>
    <h1 className='about-head' >HOW IT WORKS</h1>
    </div>
    <p className='about-head-p'> Bike-Share is a bike rental and sharing service that provides a platform to connect bike owners with active people looking to rent or borrow in your local area. 
      Through our service, owners list their bikes, renters search for a bike, and complete the rental process easily through our website. We even offer various protection options to make everyone happy.
      <br/>Save money, meet awesome people, and consume less.
      </p>
    

    <div className = 'about-box'>
    <h1 className='about-h1'>Search for a ride</h1>
    <p className='about-p'>
    Search through tons of rides in the area.
    Reserve a bike during the dates you need it.
    Then book and pay through Bike-Share. 
    It’s cashless and convenient. 

      </p>   
    </div>
    <div className = 'about-box'>
    <h1 className='about-h1'>Share your ride</h1>

      <p className='about-p'>
      Make up to $500/month sharing your ride(s).
      
      by sharing your with fellow bike travelers, racers, and enthusiasts.
      Go to Post Bike and submit bike info to share your ride.
      </p>

    </div>
  </main>
  )
}