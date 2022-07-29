import React, { Component } from 'react';
import './App.css';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import Event from './components/Event';
import NumberOfEvents from './components/NumberOfEvents';


class App extends Component {
  state = {
    events: [],
    locations: []
  }
  render() {
  return (
    <div className="App">
      <CitySearch locations={this.state.locations}/>
      <EventList events={this.state.events} />
      <Event />
      <NumberOfEvents />
    </div>
  );
  }
}

export default App;
