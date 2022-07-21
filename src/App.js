import React from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import Event from './Event';


function App() {
  return (
    <div className="App">
      <CitySearch />
      <EventList />
      {/* <Event /> */}
    </div>
  );
}

export default App;
