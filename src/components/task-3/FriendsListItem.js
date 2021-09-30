import PropTypes from "prop-types";

export default function FriendsListItem({
  id,
  status,
  friendAvatar,
  friendName,
}) {
  return (
    <li className="friends__item">
      <span
        className={
          status
            ? "friends__status friends__status--online"
            : "friends__status friends__status--offline"
        }
      ></span>
      <img
        className="friends__avatar"
        src={friendAvatar}
        alt="avatar"
        width="48"
      />
      <p className="friends__name">{friendName}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  key: PropTypes.number.isRequired,
  friendName: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  friendAvatar: PropTypes.string.isRequired,
};