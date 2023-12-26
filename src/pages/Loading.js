import React from 'react';
import Background from '../component/Background'; 
import Header from '../component/Header'

class Loading extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      console.log("awaiting backend response")
      //this.props.history.push('/display-data');
    }, 2000); // After 2 seconds, go to the next page
  }
  
  render() {
    return (
      <div>
        <div className='container'>
      <div className='Background'><Background/></div>
      <div className='Header'><Header/></div>
      </div>       
      </div>
    );
  }
}

export default Loading;