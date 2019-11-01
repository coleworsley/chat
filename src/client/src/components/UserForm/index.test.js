import React from 'react';
import { UserForm } from './index.js';
import { shallow } from 'enzyme';

describe('UserForm', () => {
  let container;
  beforeEach(() => {
    container = shallow(<UserForm />);
  });

  it('renders', () => {
    expect(container).toBeDefined();
  });
});
