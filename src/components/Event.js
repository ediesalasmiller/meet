import React, { Component } from "react";

class Event extends Component {
    
    handleClick = () => {
    console.log('this is:', this);
  };

    render() {
        const { event } = this.props;
        return ( 
        <div className="event">
            <h4 className="title">{event.summary}</h4>
            <h6 className="time">{event.originalStartTime}</h6>
            <h6 className="location">{event.location}</h6>
            <button className="showDetails" onClick={event.description}>Show Details</button>
          
        </div>
        );
    }
}
export default Event