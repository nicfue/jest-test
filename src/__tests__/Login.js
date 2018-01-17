import React from 'react';
import { mount } from 'enzyme';
import Login from '../components/Login';

it('simulate login failed', () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);

});

it('simulate login success', () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  // expect(wrapper.mock.calls.length).toEqual(1)
});
