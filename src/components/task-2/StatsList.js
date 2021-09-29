import StatisticItem from "./Stat";
import PropTypes from "prop-types";

export default function StatsList({ items }) {
  return (
    <ul className="stat-list">
      {items.map((item) => (
        <li className="item" key={item.id}>
          <StatisticItem label={item.label} percentage={item.percentage} />{" "}
        </li>
      ))}
    </ul>
  );
}

StatsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};
