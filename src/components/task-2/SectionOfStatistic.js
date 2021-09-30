import React from "react";
import PropTypes from "prop-types";

function Section({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2>{title}</h2>}
      <ul className="statistics__list">
        {stats.map((item) => (
          <li className="statistics__item" key={item.id}>
            <span className="statistics__label">{item.label}</span>
            <span className="statistics__percentage">{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Section;
