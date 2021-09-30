import React from "react";
import FriendsListItem from "./FriendsListItem";

export default function FriendList({ friends }) {
  return (
    <ul className="friends">
      {friends.map((friend) => (
        <FriendsListItem
          id={friend.id}
          friendAvatar={friend.avatar}
          status={friend.isOnline}
          friendName={friend.name}
        />
      ))}
    </ul>
  );
}
