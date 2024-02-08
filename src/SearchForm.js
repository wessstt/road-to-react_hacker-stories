import React from "react";
import { ReactComponent as Search } from "./svg/search.svg";
import { InputWithLabel } from "./InputWithLabel.js";
import styles from "./App.module.css";

const SearchForm = ({ searchTerm, onSearchInput, onSearchSubmit }) => (
  <form onSubmit={onSearchSubmit} className={styles.searchForm}>
    <InputWithLabel
      id="search"
      value={searchTerm}
      isFocused
      onInputChange={onSearchInput}
    >
      <Search height="25px" width="25px" />
    </InputWithLabel>

    <button
      type="submit"
      disabled={!searchTerm}
      className={`${styles.button} ${styles.buttonLarge}`}
    >
      Submit
    </button>
  </form>
);

export { SearchForm };
