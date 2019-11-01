import React from 'react';
import { shallow, mount } from 'enzyme';
import { MessageForm } from './index.js';
import { SocketContext } from '../../../context';

describe('MessageForm - Shallow', () => {
  let container;
  beforeEach(() => {
    container = shallow(<MessageForm />);
  });

  it('renders', () => {
    expect(container).toBeDefined();
  });
});

const socketMock = {
  on: jest.fn(),
  off: jest.fn()
};

describe('MessageForm - Mount', () => {
  let container;
  beforeEach(() => {
    container = mount(
      <SocketContext.Provider value={{ socket: socketMock }}>
        <MessageForm />
      </SocketContext.Provider>
    )
  });

  it('renders', () => {
    expect(container).toBeDefined();
  });
});
