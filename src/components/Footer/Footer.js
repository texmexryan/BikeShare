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
      <div>
        <h4>Contact</h4>
        <ul className = 'contact'>
          {/* <li>Local: 801-555-1234</li> */}
          <li>Phone: 800-222-1234</li>
          <li>Email: support@bikeshare.com</li>
          <li>Mail: PO BOX 2020, Scottsdale AZ, 85782</li>
        </ul>
      </div>


      <div>
        <ul className = 'list'>
          <li className = 'link-footer'><Link to = '/about/howitworks' >How It Works</Link></li>
          <li className = 'link-footer'><Link to = '/about/policy'>Policy</Link></li>
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
