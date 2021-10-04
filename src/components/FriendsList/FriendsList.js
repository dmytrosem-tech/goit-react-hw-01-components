import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import styles from "./FriendsList.module.css";

export default function FriendsList({ friends }) {
  return (
    <ul className={styles.friends}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li className={styles.friends__card} key={id}>
          <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
