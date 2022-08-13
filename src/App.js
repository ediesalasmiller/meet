import React, { Component } from 'react';
import "./App.css";
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
// import Event from './components/Event';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents, extractLocations } from './api';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import EventGenre from './components/EventGenre';


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

  updateEvents = (
      location,
      eventCount
    ) => {
    if (eventCount === undefined) {
      eventCount = this.state.numberOfEvents;
    } else (
      this.setState({ numberOfEvents: eventCount })
    )
    if (location === undefined) {
      location = this.state.selectedLocation
    }
  getEvents().then((events) => {
    const locationEvents = (location === 'all') ?
      events :
      events.filter((event) => event.location === location);
    this.setState({
      events: locationEvents.slice(0, eventCount),
          numberOfEvents: eventCount,
          selectedLocation: location
    });
  });
}

 getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
    const number = events.filter((event) => event.location === location).length
    const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };


  componentWillUnmount(){
    this.mounted = false;
  };
  render() {
  const { events } = this.state;
  return (
    <div className="App">
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
      <p>Number of Events</p>
      <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents}/>
      <h4>Events in each city</h4>
      <EventGenre events={events} />
        <ResponsiveContainer height={400} >
         <ScatterChart
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
          >
          <CartesianGrid />
          <XAxis type="category" dataKey="city" name="city" />
          <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={this.getData()} fill="#8884d8" />
        </ScatterChart>
        </ResponsiveContainer>
        <EventList events={this.state.events} />
    
      </div>
    );
  }
}

export default App;
