import React from 'react';
import { Message } from './index.js';
import { shallow } from 'enzyme';

describe('MessageForm', () => {
  let container;
  beforeEach(() => {
    container = shallow(<Message />);
  });

  it('renders', () => {
    expect(container).toBeDefined();
  });
});
