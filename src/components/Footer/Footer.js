import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import './Footer.css'

//  function Footer () {
    class Footer extends Component {
        constructor(props) {
            super(props);
            this.state = { 
    
             }
        }

    
    render (){
    if(this.props.location.pathname === '/'){
        return (
            <div></div>
            )
        } else {
  return (
    <div className = 'footer'>
      <div className ='foot-div'>
        {/* <h4>Contact</h4> */}
        <ul className = 'contact'>
          <li className='li-contact'> © Bike-Share 2018</li>
          <li className='li-contact'>Phone: 480-222-1212</li>
          <li className='li-contact'>Email: support@bikeshare.com</li>
          <li className='li-contact'>Mail: PO BOX 2020, Scottsdale AZ, 85752</li>
        </ul>
      </div>


      <div className ='foot-div'>
        <ul className = 'list'>
          <li className = 'link-footer'><Link to = '/about/howitworks' >How It Works</Link></li>
          <li className = 'link-footer'><Link to = '/about/policies'>Policy</Link></li>
          <li className = 'link-footer'><Link to = '/about/faq' >FAQ</Link></li>
          {/* <li className = 'link'><Link to = '/about'>About</Link></li> */}
        </ul>
      </div>
    </div>
  )
}
}
}

export default withRouter(Footer)
