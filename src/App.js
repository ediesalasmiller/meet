import React from 'react';
import './App.css';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import Event from './components/Event';
import NumberOfEvents from './components/NumberOfEvents';


function App() {
  return (
    <div className="App">
      <CitySearch />
      <EventList />
      <Event />
      <NumberOfEvents />
    </div>
  );
}

export default App;
