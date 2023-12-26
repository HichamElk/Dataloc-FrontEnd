import React from 'react';
import axios from 'axios';

class DisplayData extends React.Component {
  state = {
    data: null
  }

  async componentDidMount() {
    try {
      let response = await axios.get('http://localhost:5000/api/data');
      this.setState({ data: response.data });
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    if (!this.state.data) {
      return <h1>Loading...</h1>;   // Show this while we're loading data
    }
    return (
      <div>
        <h1>Data from the server:</h1>
        <p>{this.state.data.text}</p>
        <p>From: {this.state.data.source}</p>
        <img src={this.state.data.imageUrl} alt="City map" />
      </div>
    );
  }
}

export default DisplayData;