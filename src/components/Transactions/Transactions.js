import React from "react";
import PropTypes from "prop-types";

export default function TransactionHistory({ items }) {
  return (
    <table className="transactions">
      <thead className="ransactions__head">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className="transactions__table">
        {items.map(({ id, type, amount, currency }) => (
          <tr className="transaction__item" key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
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
