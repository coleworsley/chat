import React from 'react';
import App from './index.js';
import { shallow } from 'enzyme';

describe('App', () => {
  let container;
  beforeEach(() => {
    container = shallow(<App />);
  });

  it('renders', () => {
    expect(container).toBeDefined();
  });
});
