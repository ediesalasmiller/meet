import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    inputNumber: ''
  };

   handleInputChanged = (event, numberOfEvents) => {
    const { value } = event.value;
    // The isNaN() function determines whether a value is NaN Not
    if(!isNaN(value) && value >= 1 && value <=32) {
      this.props({ numberOfEvents: value })
    }else { 
      inputNumber: '32'
    };
  }

  render() {
    return (
      <div className='NumberOfEvents'>
        <input
        type="number" 
        className='events' 
        id='numberEvents' 
        value={this.state.numberOfEvents} 
        onChange={this.handleInputChange} 
        />
      </div>
    );
  }
}

export default NumberOfEvents;