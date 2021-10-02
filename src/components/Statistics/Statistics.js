import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

function Section({ title, stats }) {
  return (
    <section className={styles.statistics}>
      <div className={styles.statistics__box}>
        {title && <h2 className={styles.statistics__title}>{title}</h2>}
        <ul className={styles.statistics__list}>
          {stats.map(({ label, percentage, id }) => (
            <li className={styles.statistics__item} key={id}>
              <span className={styles.statistics__label}>{label}</span>
              <span className={styles.statistics__percentage}>
                {percentage}
              </span>
            </li>
          ))}
        </ul>
      </div>
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
