import React, { Component } from 'react';
import "./App.css";
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import Event from './components/Event';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents } from './api';


class App extends Component {
  state = {
    events: [],
    locations: []
  }
    updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  }
  render() {
  return (
    <div className="App">
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
      <EventList events={this.state.events} />
      <Event />
      <NumberOfEvents />
    </div>
  );
  }
}

export default App;
