import React from "react";
import PropTypes from "prop-types";

export default function FriendList({ friends }) {
  return (
    <ul className="friends">
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li className="friends__item" key={id}>
          <span
            className={
              isOnline
                ? "friends__status friends__status--online"
                : "friends__status friends__status--offline"
            }
          ></span>
          <img
            className="friends__avatar"
            src={avatar}
            alt="avatar"
            width="48"
          />
          <p className="friends__name">{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
