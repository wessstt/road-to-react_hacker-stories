import React, { useState } from "react";
import { sortBy } from "lodash";
import { ReactComponent as Delete } from "./svg/delete.svg";
import styles from "./App.module.css";

const SORTS = {
  NONE: (list) => list,
  TITLE: (list) => sortBy(list, "title"),
  AUTHOR: (list) => sortBy(list, "author"),
  COMMENT: (list) => sortBy(list, "num_comments").reverse(),
  POINT: (list) => sortBy(list, "points").reverse(),
};

const List = React.memo(({ list, onRemoveItem }) => {
  console.log("B:List");
  const [sort, setSort] = useState({
    sortKey: "NONE",
    isReverse: false,
  });

  const handleSort = (sortKey) => {
    const isReverse = sort.sortKey === sortKey && !sort.isReverse;

    setSort({ sortKey, isReverse });
  };

  const sortFunction = SORTS[sort.sortKey];

  const sortedList = sort.isReverse
    ? sortFunction(list).reverse()
    : sortFunction(list);

  return (
    <div>
      <div>
        <span>
          <button
            type="button"
            onClick={() => handleSort("TITLE")}
            className={`${styles.button} ${styles.buttonLarge}`}
          >
            Title
          </button>
        </span>
        <span>
          <button
            type="button"
            onClick={() => handleSort("AUTHOR")}
            className={`${styles.button} ${styles.buttonLarge}`}
          >
            Author
          </button>
        </span>
        <span>
          <button
            type="button"
            onClick={() => handleSort("COMMENT")}
            className={`${styles.button} ${styles.buttonLarge}`}
          >
            Comments
          </button>
        </span>
        <span>
          <button
            type="button"
            onClick={() => handleSort("POINT")}
            className={`${styles.button} ${styles.buttonLarge}`}
          >
            Points
          </button>
        </span>
      </div>

      {sortedList.map((item) => (
        <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </div>
  );
});

const Item = ({ item, onRemoveItem }) => (
  <div className={styles.item}>
    <span style={{ width: "40%" }}>
      <a href={item.url}>{item.title}</a>
    </span>
    <span style={{ width: "30%" }}>{item.author}</span>
    <span style={{ width: "10%" }}>{item.num_comments}</span>
    <span style={{ width: "10%" }}>{item.points}</span>
    <span style={{ width: "10%" }}>
      <button
        type="button"
        onClick={() => onRemoveItem(item)}
        className={`${styles.button} ${styles.buttonSmall}`}
      >
        <Delete height="18px" width="18px" />
      </button>
    </span>
  </div>
);

export { List };
