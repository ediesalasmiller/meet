import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });
  test('render event number textbox', () => {
    expect(NumberOfEventsWrapper.find('.events')).toHaveLength(1);
  });

  test('render event number', () => {
      expect(NumberOfEventsWrapper.find('.number').length).toBe(0);
  })
    
});