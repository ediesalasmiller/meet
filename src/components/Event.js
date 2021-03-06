import React, { Component } from "react";

class Event extends Component {
    toggleDetails = () => {
        this.setState({ show: !this.state.show });
    }

    constructor() {
        super();
        this.state = {
            show: false
        }
    }

    render() {
        const { event } = this.props;
        const { show } = this.state;

        return (
            <div className="event">
                <h1 className="event-title">{event.summary}</h1>
                <div className="event-info">{event.start.dateTime} {event.start.timeZone} {event.location}</div>
                {show && <div className="event-details">{event.description}</div>}
                <button className="details-button" onClick={this.toggleDetails}>View details</button>
            </div>
        );
    }
}
export default Event;