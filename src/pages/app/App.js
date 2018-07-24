import React, { Component } from 'react';
// import logo from '/logo.svg';
import './App.css';
// import ReactDOM from 'react-dom';
// import {
//   HashRouter,
//   Route,
//   Link,
//   Switch
// } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
