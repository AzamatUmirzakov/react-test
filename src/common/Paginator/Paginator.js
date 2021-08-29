import React, { useState } from "react";
import styles from "./Paginator.module.css";

const Paginator = (props) => {
  const {
    totalItemsCount,
    pageSize,
    currentPage,
    onPageChanged,
    portionSize = 10,
  } = props;

  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  const leftPortionBorder = (portionNumber - 1) * portionSize + 1;
  const rightPortionBorder = portionNumber * portionSize;

  const pages = [];

  for (let i = leftPortionBorder; i < rightPortionBorder; i++) {
    pages.push(
      <span
        key={i}
        className={
          props.currentPage === i
            ? `${styles.pageLink} ${styles.selected}`
            : styles.pageLink
        }
        onClick={() => {
          props.onPageChanged(i);
        }}
      >
        {i}
      </span>
    );
  }
  return (
    <div className={styles.pagination}>
      {portionNumber > 1 ? (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          Previous
        </button>
      ) : null}
      {pages}
      {portionNumber >= portionCount ? null : (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Paginator;
