import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';


it('renders NotificationItem elements', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find(NotificationItem)).toHaveLength(3); // Assuming you have 3 notifications
});

it('renders the first NotificationItem with the correct html', () => {
  const wrapper = shallow(<Notifications />);
  const firstNotification = wrapper.find(NotificationItem).first();
  expect(firstNotification.props().html).toEqual({ __html: '<strong>Urgent requirement</strong> - resume check' });
});