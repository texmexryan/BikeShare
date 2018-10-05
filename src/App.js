import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import routes from './routes'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import './reset.css'

class App extends Component {
  render() {
    return (
      
      <div className="App">

        <Nav/>
        

        {routes}
      
      {/* <Footer/> */}
      </div>
    
    );
  }
}

export default App;
