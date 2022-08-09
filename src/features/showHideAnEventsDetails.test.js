import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
//scenario 1
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        let AppWrapper;  
        
        given('the user opens the app', () => {
             AppWrapper = mount(<App />)
        });

        when('the user sees a list of all upcoming events', () => {
        AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
        });

        then('the user sees list of collapsed events', () => {
            AppWrapper.update();
             expect(AppWrapper.find('.event .event-details')).toHaveLength(0);
        });
    });
//scenario 2
    test('User can expand an event to see its details.', ({ given, when, then }) => {
        let AppWrapper; 

        given('user has not selected an event', () => {
            AppWrapper = mount(<App />);
        });

        when('the user selects an event', () => {
            AppWrapper.update();
            AppWrapper.find('.event .details-button').at(0).simulate('click');;
        });

        then('the user can see the details of the event they selected.', () => {
            expect(AppWrapper.find('.event .event-details')).toHaveLength(1);
        });
    });

//scenario 3
    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
        let AppWrapper;
        given('user shows details of event', async() => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            AppWrapper.find('.event .details-button').at(0).simulate('click');
        });

        when('the user hides details', () => {
            AppWrapper.update();
            AppWrapper.find('.event .details-button').at(0).simulate('click');
        });

        then('the user can continue scrolling through collapsed events.', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event .event-details')).toHaveLength(0);
        });
    });

});
