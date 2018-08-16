import React, { Component } from 'react';
import './App.css';
import ViewComponent from './Containers/ViewComponent/ViewComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
     <ViewComponent/>
      </div>
    );
  }
}

export default App;
