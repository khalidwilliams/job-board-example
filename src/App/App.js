import React, { Component } from 'react';
import './App.css';
import SearchForm from '../SearchForm/SearchForm';
import Jobs from '../Jobs/Jobs';

class App extends Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
      error: ''
    };
    this.url = 'https://jobs.github.com/positions.json';
  }

  search = (searchParameters) => {
    const jobLocation = searchParameters.jobLocation;
    const description = searchParameters.description;

    const requestUrl = `${this.url}?description=${description}&location=${jobLocation}`;
    console.log(requestUrl);

    fetch('https://fe-cors-proxy.herokuapp.com/', {
        headers: {
              "Target-URL": requestUrl
            }
    })
      .then(response => {
        console.log(response)
        if (response.ok) {
          return response.json()
        } else {
          throw new Error({...response})
        }
      })
      .then(jobs => {
        console.log(jobs);
        this.setState({jobs: jobs, error: ''})
      })
      .catch(error => {
        this.setState({error});
      })
  }

  render () {
  return (
    <div className="App">
      <h1>Job Searcher</h1>
      <SearchForm search={this.search}/>
      <Jobs jobs={this.state.jobs} />
    </div>
  );
  }
}

export default App;
