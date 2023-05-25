import React from "react";
import { Link } from "react-router-dom";
import{AiOutlineSearch} from "react-icons/ai"
import classes from "./VideoNavbar.module.css"

export default function VideoNavbar() {
  return (
    <div className={classes.videoNavbar}>
      <Link to="/search" className={classes.links}><AiOutlineSearch size={25}/></Link>&nbsp;&nbsp;
      <Link to="/overview" className={classes.links}>Overview</Link>&nbsp;&nbsp;
      <Link to="/q&a"className={classes.links}>Q&A</Link>&nbsp;&nbsp;
      <Link to="/notes"className={classes.links}>Notes</Link>&nbsp;&nbsp;
      <Link to="/announcement"className={classes.links}>Announcement</Link>&nbsp;&nbsp;
      <Link to="/reviews"className={classes.links}>Reviews</Link>&nbsp;&nbsp;
      <Link to="/learningtools"className={classes.links}>Learning Tools</Link>
    </div>
  );
}
