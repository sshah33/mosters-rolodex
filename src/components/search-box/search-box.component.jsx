import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, onChangeHandler, className }) => (
  <input
    className={className}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);
