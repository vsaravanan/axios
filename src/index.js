import React from 'react';
import ReactDOM from 'react-dom';
//import axios from 'axios';

import API from './api';

export default class PersonList extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = async event => {
    event.preventDefault();
  
    // Promise is resolved and value is inside of the response const.
    const response = await API.delete(`users/${this.state.id}`);
  
    console.log(response);
    console.log(response.data);
  };


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<PersonList />, document.getElementById('root'));