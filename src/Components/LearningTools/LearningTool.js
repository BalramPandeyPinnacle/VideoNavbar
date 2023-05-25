import React from "react";
import classes from "./LearningTool.module.css";

import { useNavigate } from "react-router-dom";
export default function LearningTool() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/learningtool");
  };
  return (
    <>
      <button onClick={handleClick} className={classes.heading}>
      LearningTool
      </button>
    </>
  );
}