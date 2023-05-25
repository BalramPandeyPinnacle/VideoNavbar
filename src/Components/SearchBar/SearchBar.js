import React from "react"
import classes from "./SeachBar.module.css"
import { FaSearch } from "react-icons/fa"

function SearchBar() {
  return (
    <>
    <div className={classes.searchbox}>
      <form className={classes.inputbox}>
        <input
          type="text"
          name="product-search"
          id="product-search"
          placeholder="Search course content"
        />

        <div className={classes.icon_container}>
          <FaSearch className={classes.search_icon} size={30} />
        </div>
      </form>

    </div>
    <div className={classes.bellowseach}>
        <div className={classes.searchheading}>Start a new search</div>
        <div className={classes.searhContent}>To find captions, lectures or resources</div>
      </div>
    </>
  )
}

export default SearchBar