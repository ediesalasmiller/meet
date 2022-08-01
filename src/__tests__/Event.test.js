import React from 'react';
import { shallow } from 'enzyme';
import Event from '../components/Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });
   test('render event', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });
  test('render title', () => {
    expect(EventWrapper.find('.event-title')).toHaveLength(1);
  });
  test('render details', () => {
    expect(EventWrapper.find('.details-button')).toHaveLength(1);
  });
});