import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../components/App';

it('should render <App /> without user', () => {
  const wrapper = shallow(<App user="" />)
  expect(wrapper.text()).toBeTruthy()
});


it('should render <App /> with user', () => {
  const user = "Nicolas";
  const wrapper = shallow(<App user={user} />);
  expect(wrapper.find('.user').text()).toBe(user);
});

it('call the internal method loginSuccessful', () => {
  const user = "Nicolas";
  const wrapper = mount(<App user="" />);
  const inst = wrapper.instance();
  inst.loginSuccessful(user)
  expect(wrapper.state().user).toBe(user)
});


it('call the internal method logout', () => {
  const user = 'Nicolas';
  const wrapper = mount(<App user={user} />);
  const inst = wrapper.instance();
  inst.logout()
  expect(wrapper.state().user).toBeFalsy();
  });
