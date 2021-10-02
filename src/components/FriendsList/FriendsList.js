import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendsList.module.css";

export default function FriendsList({ friends }) {
  return (
    <ul className={styles.friends}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li className={styles.friends__item} key={id}>
          <span
            className={styles.friend__status}
            style={
              isOnline
                ? { backgroundColor: "green" }
                : { backgroundColor: "red" }
            }
          ></span>
          <img
            className={styles.friend__avatar}
            src={avatar}
            alt="avatar"
            width="48"
          />
          <p className={styles.friend__name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
