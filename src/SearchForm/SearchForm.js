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
    this.props.search({...this.state})
    this.setState({description: '', jobLocation: ''});
  }

  render() {
    return (
      <form> 
        <div className="label-wrapper">
          <label htmlFor="description">Job Description</label>
          <input onChange={this.changeHandler}  value={this.state.description} id="description" name="description" placeholder="Ex: 'JavaScript'"/>
        </div>
        <div className="label-wrapper">
          <label htmlFor="jobLocation">Job Location</label>
          <input onChange={this.changeHandler} value={this.state.jobLocation} id="jobLocation" name="jobLocation" placeholder="Ex: 'New York'"/>
        </div>
        <button onClick={this.submitHandler} type="submit">Search!</button>
      </form>
    )
  }
}

export default SearchForm;
