import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import EventList from "../components/EventList";
import CitySearch from '../components/CitySearch';
import NumberOfEvents from '../components/NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';

//unit tests
describe('<App /> component', () => {
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(<App />);
    });
    test('render list of events', () =>{
        expect(AppWrapper.find(EventList)).toHaveLength(1);
    });
    test('render CitySearch', () => {
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });
    test('render NumberOfEvents', () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    });

});

//integration tests
describe('<App /> integration', () => {
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = mount(<App />);
    });
    
    test('app will pass "events STATE as a PROP to EventList', () => {
        const AppEventsState = AppWrapper.state('events');
        expect(AppEventsState).not.toEqual(undefined);
        expect(AppWrapper.find(EventList).props.events).toEqual(AppEventsState);  
        AppWrapper.unmount() 
    });
    test('app passes "location" state as prop to CitySearch', () => {
        const AppLocationsState = AppWrapper.state('locations');
        expect(AppLocationsState).not.toEqual(undefined);
        expect(AppWrapper.find(CitySearch).props.locations).toEqual(AppLocationsState);
        AppWrapper.unmount()
    });
    test('get list of events matching city selected by user', async () => {
        const CitySearchWrapper = AppWrapper.find(CitySearch);
        const locations= extractLocations(mockData);
        //citysearch is getting set to have ALL available cities... locations is extracted from the events themselves
        CitySearchWrapper.setState({ suggestions: locations });
        const suggestions = CitySearchWrapper.state('suggestions');
//selectedIndex will hold index of selected suggestion from suggestions arround... 
//mathfloor still will eval to an integer value from - to suggestions.length -1
        const selectedIndex = Math.floor(Match.random() * (suggestions.length));
        //once the index is selected.. its used to return suggestions, which is stored in selectedCity var
        const selectedCity = suggestions[selectedIndex];
        //await is added to handleItemClicked bc its expected that it has async to fetch before filtering to suggestionsn.
        await CitySearchWrapper.instance().handleItemClicked(selectedCity);
        //This function is mainly expected to get all the events from the API asynchronously
        const allEvents = await getEvents();
        //now that all events is filtered against the selected city to find events in same location.... eventsToShow is born.
        const eventsToShow = allEvents.filter(event => event.location === selectedCity);
        expect(AppWrapper.state('events')).toEqual(eventsToShow);
        AppWrapper.unmount();

    })
});