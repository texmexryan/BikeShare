import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import routes from './routes'
import Nav from './components/Nav/Nav'
import './reset.css'

class App extends Component {
  render() {
    return (
      
      <div className="App">

        <Nav/>
        <br/>

        {routes}

      </div>
    
    );
  }
}

export default App;
