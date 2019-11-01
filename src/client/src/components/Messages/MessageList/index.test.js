import React from 'react';
import { shallow, mount } from 'enzyme';
import { SocketContext } from '../../../context';
import { MessageList } from './index.js';

describe('Message List - Shallow', () => {
  let container;
  beforeEach(() => {
    container = shallow(<MessageList />);
  });

  it('renders', () => {
    expect(container).toBeDefined();
  });
});

const socketMock = {
  on: jest.fn(),
  off: jest.fn()
};

describe('Message List - Mount', () => {
  let container;
  beforeEach(() => {
    container = mount(
      <SocketContext.Provider value={{ socket: socketMock }}>
        <MessageList />
      </SocketContext.Provider>
    )
  });

  it('renders', () => {
    expect(container).toBeDefined();
  });
});
