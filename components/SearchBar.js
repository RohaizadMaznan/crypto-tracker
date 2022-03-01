import React from "react";
import styles from "../styles/Searchbar.module.css";

function SearchBar({ ...rest }) {
  return (
    <div className={styles.coin__search}>
      <input className={styles.coin__input} {...rest} />
    </div>
  );
}

export default SearchBar;
