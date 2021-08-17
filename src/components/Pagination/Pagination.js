import "./Pagination.css";

import React from "react";

const Pagination = (props) => {
  const { numberPage, setNumberPage, limit, maxPage, setSkip } = props;

  const handleDecrement = () => {
    if (numberPage > 1) {
      setNumberPage(numberPage - 1);
      setSkip(limit * numberPage - limit * 2);
    }
  };

  const handleIncrement = () => {
    if (numberPage < maxPage) {
      setNumberPage(numberPage + 1);
      setSkip(limit * numberPage);
    }
  };

  return (
    <div className="pagination-page">
      <div className="pagination-container">
        <button onClick={handleDecrement} className="decrement-btn">
          -
        </button>
        <span>
          Page : {numberPage} / {maxPage}
        </span>
        <button onClick={handleIncrement} className="increment-btn">
          +
        </button>
      </div>
    </div>
  );
};

export default Pagination;
