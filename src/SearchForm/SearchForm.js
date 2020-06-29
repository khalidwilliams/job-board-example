import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      jobLocation: ''
    }
  }

  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  submitHandler = (event) => {
    event.preventDefault();
    if (this.state.description || this.state.jobLocation) {
      this.props.search({...this.state})
    }
  }

  render() {
    return (
      <form> 
        <div className="label-wrapper">
          <label htmlFor="description">Job Description</label>
          <input id="description" name="description" placeholder="Ex: 'JavaScript'"/>
        </div>
        <div className="label-wrapper">
          <label htmlFor="jobLocation">Job Location</label>
          <input id="jobLocation" name="jobLocation" placeholder="Ex: 'Denver'"/>
        </div>
        <button type="submit">Search!</button>
      </form>
    )
  }
}

export default SearchForm;
