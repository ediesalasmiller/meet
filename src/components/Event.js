import React, { Component } from "react";
import { mockData } from "../mock-data";


class Event extends Component {
    
    handleClick = () => {
    console.log('this is:', this);
  };

    render() {
        // const { events } = this.props;
        return ( 
        <div className="event">
            <h4 className="title">{mockData.summary}</h4>
            <h6 className="time">{mockData.originalStartTime}</h6>
            <h6 className="location">{mockData.location}</h6>
            <button className="showDetails" onClick={mockData.description}>Show Details</button>
          
        </div>
        );
    }
}
export default Event