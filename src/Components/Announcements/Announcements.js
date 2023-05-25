import React from 'react'
import classes from "./Announcements.module.css"
import image from "../../assets/baljitsir.png";
import{RiFlagFill} from "react-icons/ri"

export default function Announcements() {
  return (
    <div className={classes.Annpage}>
        <form className={classes.form}>
            <div className={classes.imgsection}>
            <div><img src={image} alt='img' className={classes.img}></img></div>
            <div className={classes.imgdecs}><b>Mr. Baljit Dhaka</b><br/> posted an announcement <RiFlagFill/></div>
            </div>
            <div className={classes.Announcements}> We Have Announcement For You That We Launched A Video Course For You.</div>
        </form>
      
    </div>
  )
}
