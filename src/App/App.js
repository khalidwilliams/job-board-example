import React, { Component } from 'react';
import './App.css';
import SearchForm from '../SearchForm/SearchForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      jobs: []
    }
  }

  render () {
  return (
    <div className="App">
      <SearchForm />
    </div>
  );
  }
}

export default App;
