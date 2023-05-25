import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Overview.module.css";
import { GiAlarmClock } from "react-icons/gi";
import image from "../../assets/baljitsir.png";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";

export default function Overview() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  const [dismiss, setDismiss] = useState(true);
  const submitHandler = (e) => {
    e.preventDefault();
    setDismiss(!dismiss);
  };
  return (
    <div className={classes.fpage}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.icon}>
          <GiAlarmClock size={30} />
        </div>
        <div>
          <div className={classes.slheading}>Schedule learning time</div>
          <div className={classes.slcontent}>
            Learning a little each day adds up. Research shows that students who
            make learning a habit are more likely to reach their goals.
            <br /> Set time aside to learn and get reminders using your learning
            scheduler.
          </div>
          <button className={classes.gstarted}>Get Started</button>
          <button onClick={submitHandler} className={classes.dismissbtn}>
            Dismiss
          </button>
        </div>
      </form>
      {/* About Section */}
      <div className={classes.aboutcourse}>
        <div className={classes.abheading}>About this course</div>
        <div className={classes.abcontent}>Description of Course</div>
      </div>
      {/* By the numbers section */}
      <div className={classes.nusection}>
        <div className={classes.ncontent1}>By the numbers</div>
        <div className={classes.ncontent2}>
          Skill level: All Levels
          <br />
          Students: ......
          <br />
          Languages: .......
          <br />
          Captions: Yes
        </div>
        <div className={classes.ncontent2}>
          Lectures:
          <br />
          Video: ..... total hours
        </div>
      </div>
      {/* Description */}

      <div className={classes.description}>
        <div className={classes.dheading}>Description</div>
        <div className={classes.dcontent}>
          Welcome to Course Name! My hope is that by the end of this course you
          have a new appreciation for the subject matter and will continue your
          education in the subject.
        </div>
      </div>
      <div>
        <button onClick={toggleContent} className={classes.showbtn}>
          {showContent ? "Show Less " : "Show More"}
        </button>
        {showContent && (
          // remaining discription
          <div className={classes.remdescription}>
            <div>
              {" "}
              The SSC CGL exam is conducted every year for the recruitment of
              candidates in various Grade‘B’ and ‘C’ posts in different
              departments and ministries under the Government of India. The SSC
              CGL exam pattern and syllabus are released by the authorities in
              the official notification. The authorities have announced April
              2022 as the tentative SSC CGL exam date for Tier 1 exam. This
              article will provide you with information regarding SSC CGL 2022
              and help you devise a strategy that shall give you the impetus
              required to ace the exam. Take FREE Mock Test For SSC CGL
            </div>
            {/* instructor section */}
        <div className={classes.instructorSection}>
          <div className={classes.inst}>Instructor</div>
          <div className={classes.insDescription}>
            <div className={classes.imgsection}>
              <img src={image} alt="img" className={classes.img} />
              <div>Mr.Baljit Dhaka</div>
              <div> CEO of Pinnacle Publication</div>
            </div>
            <div>
              <FaTwitter size={20} />
            </div>
            <div>
              <FaLinkedin size={20} />
            </div>
            <div>
              <IoMdLink size={20} />
            </div>
          </div>
        </div>
          </div>
        )}

        
      </div>
    </div>
  );
}
