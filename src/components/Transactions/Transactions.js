import React from "react";
import PropTypes from "prop-types";
import style from "./Transactions.module.css";

export default function TransactionHistory({ items }) {
  return (
    <section className={style.section}>
      <table className={style.table}>
        <thead className={style.table__head}>
          <tr className={style.table__row}>
            <th className={style.table__headers}>Type</th>
            <th className={style.table__headers}>Amount</th>
            <th className={style.table__headers}>Currency</th>
          </tr>
        </thead>

        <tbody className={style.table__body}>
          {items.map(({ id, type, amount, currency }) => (
            <tr className={style.table__item} key={id}>
              <td className={style.table__data}>{type}</td>
              <td className={style.table__data}>{amount}</td>
              <td className={style.table__data}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
