import React from 'react'
import classes from "./CustomDuration.module.css"

export default function CustomDuration() {
  return (
    <div className={classes.customD}>
    <input type="number" className={classes.outline}></input>
    <select defaultValue="Minute(s)" className={classes.outline}>
      <option value="Minute(s)">Minute(s)</option>
      <option value="Hours">Hours</option>
    </select>
  </div>
  )
}
