import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';

function Notifications() {
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - resume check' }, },
  ];

      return (
<div className="Notifications">
<p>Here is the list of notifications</p>
<ul>
{listNotifications.map((notification) => (
<NotificationItem
key={notification.id}
type={notification.type}
value={notification.value}
html={notification.html}
/>
))}
</ul>
</div>
);
}

export default Notifications;