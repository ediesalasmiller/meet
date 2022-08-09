import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/numberofEvents.feature');

defineFeature(feature, test => {
    test('When user has not specified a number of events per page, 32 is the default number.', ({ given, when, then }) => {
        let AppWrapper;
        given('App is running', () => {
            AppWrapper = mount(<App />)
        });

        when('User has not changed deafult amount of events per page', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
        });

        then('32 events are loaded on the page.', () => {

        });
    }); 
    test('User can change the number of events per page', ({ given, when, then }) => {
        let AppWrapper;
        given('App is running', () => {
            AppWrapper = mount(<App />)
        });


        when('User changes the number of events in the input box.', () => {
        AppWrapper.find('#numberEvents').simulate('change', { target: 1 });
        });

        then('The event list renders new number of events per page based on user input', () => {
            AppWrapper.update();
            AppWrapper.find('#numberEvents').simulate('change', { target: 1 });
        });
    });
});