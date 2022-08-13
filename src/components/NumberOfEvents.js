import React, { Component } from 'react';
import { ErrorAlert } from '../Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: ''
  };

  handleInputChanged = (event, numberOfEvents) => {
    const inputValue  = event.target.value;
    // The isNaN() function determines whether a value is NaN Not
    if(inputValue >= 1 && inputValue <=32) {
      this.setState({ 
        numberOfEvents: inputValue,
        errorText: " "
      })
    }else { 
      this.setState({
        errorText: "please enter a number between 1 and 32"
      })
    };
    this.props.updateEvents(undefined, inputValue);
  }
  
  render() {
    const { numberOfEvents } = this.props;
    return (
      <div className='NumberOfEvents'>
        
        <input
        type="number" 
        className='numberEvents' 
        id='numberEvents' 
        placeholder='32'
        value={numberOfEvents}
        onChange={this.handleInputChanged} 
        />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;