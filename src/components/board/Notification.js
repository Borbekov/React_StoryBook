import React from "react";
import moment from "moment";

const Notification = ({ notifications }) => {
  return (
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">Notifications</span>
        <ul>
          {notifications &&
            notifications.map(notification => (
              <li key={notification.id}>
                <span className="yellow-text">{notification.user} </span>
                <span>{notification.content}</span>
                <p className="grey-text">
                  {moment(notification.time.toDate()).fromNow()}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Notification;
