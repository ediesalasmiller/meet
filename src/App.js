import React, { Component } from 'react';
import "./App.css";
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
// import Event from './components/Event';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents, extractLocations } from './api';


class App extends Component {
  state = {
    events: [],
    locations: []
  };
   componentDidMount() {
      this.mounted = true;
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
  };

  updateEvents = (location) => {
  getEvents().then((events) => {
    const locationEvents = (location === 'all') ?
      events :
      events.filter((event) => event.location === location);
    this.setState({
      events: locationEvents
    });
  });
}

  componentWillUnmount(){
    this.mounted = false;
  };
  render() {
  return (
    <div className="App">
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
      <EventList events={this.state.events} />
      {/* <Event /> */}
      <NumberOfEvents />
    </div>
  );
  }
}

export default App;
