import React from "react";
import FriendsListItem from "./FriendsListItem";

export default function FriendList({ friends }) {
  return (
    <ul className="friends">
      {friends.map((friend) => (
        <li className="friends__item" key={friend.id}>
          <span
            className={
              friend.isOnline
                ? "friends__status friends__status--online"
                : "friends__status friends__status--offline"
            }
          ></span>
          <img
            className="friends__avatar"
            src={friend.avatar}
            alt="avatar"
            width="48"
          />
          <p className="friends__name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//     }),
//   ),
// };
