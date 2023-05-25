import React, { useState } from "react";
import classes from "./LearningContent.module.css";
import CustomDuration from "./CustomDuration";

export default function LearningCantent() {
  const [name, setName] = useState();
  const [duration1, setDuration1] = useState(false);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const [duration, setDuration] = useState("Duration");
  const durationChangeHanndler1 = () => {
    setDuration("5 Min");
  };
  const durationChangeHanndler2 = () => {
    setDuration("10 Min");
  };
  const durationChangeHanndler3 = () => {
    setDuration("20 Min");
  };
  const durationChangeHanndler4 = () => {
    setDuration("30 Min");
  };
  const durationChangeHanndler5 = () => {
    setDuration("1H");
  };
  const durationChangeHanndler6 = () => {
    setDuration1("true");
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };
  const crossHandler = () => {
    setStep(1);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(selectedOption);
  };

  return (
    <div className={classes.margin}>
      <h2>Learning reminders</h2>
      <h2>Calendar events</h2>
      <p>
        Learning a little each day adds up. Research shows that students who
        make learning a habit are more likely to reach their goals. Set time
        aside to learn and get reminders using your learning scheduler.
      </p>
      <p className={classes.graypa}>
        Requires Google Calendar, Apple Calendar, or Outlook
      </p>

      {step === 1 && (
        <div>
          <button onClick={handleNextStep} className={classes.SLbtn}>
            Schedule learning time &#10133;
          </button>
        </div>
      )}
      {step === 2 && (
        <div>
          <table className={classes.sltable}>
            <tbody className={classes.tbody}>
              <tr>
                <td colSpan="3">
                  <h2>Create An Event</h2>
                </td>
                <td>
                  <button className={classes.cross_btn} onClick={crossHandler}>
                    &#10006;
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan="4">
                  <p>Step 1 of 2</p>
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  <b>Name</b>
                </td>
                <td>Optional</td>
              </tr>
              <tr>
                <td colSpan="4">
                  <input
                    type="text"
                    className={classes.inputbox}
                    placeholder="Time To Learn!"
                    onChange={nameChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <h2>Course</h2>
                  <p>Optional</p>
                </td>
              </tr>
              <tr>
                <td>
                  Choose from your most recent or search from your courses{" "}
                </td>
              </tr>
              <tr>
                <td className={classes.displayflex}>
                  <input
                    type="checkbox"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleOptionChange}
                    className={classes.circular_checkbox}
                  />
                  The Complete SSC(CGL)Course
                </td>
              </tr>
              <tr>
                <td className={classes.displayflex}>
                  <input
                    type="checkbox"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleOptionChange}
                    className={classes.circular_checkbox}
                  />
                  The Complete SSC(CGL)Course
                </td>
              </tr>
              <tr>
                <td className={classes.displayflex}>
                  <input
                    type="checkbox"
                    value="option3"
                    checked={selectedOption === "option3"}
                    onChange={handleOptionChange}
                    className={classes.circular_checkbox}
                  />
                  The Complete SSC(CHSL)Course
                </td>
              </tr>
              <tr>
                <td className={classes.displayflex}>
                  <input
                    type="checkbox"
                    value="option4"
                    checked={selectedOption === "option4"}
                    onChange={handleOptionChange}
                    className={classes.circular_checkbox}
                  />
                  The Complete IBPS(PO)Course
                </td>
              </tr>
              <tr>
                <td className={classes.displayflex}>
                  <input
                    type="checkbox"
                    value="option5"
                    checked={selectedOption === "option5"}
                    onChange={handleOptionChange}
                    className={classes.circular_checkbox}
                  />
                  The Complete IBPS(clerk)Course
                </td>
              </tr>
              <tr>
                <td className={classes.displayflex}>
                  <input
                    type="checkbox"
                    value="option6"
                    checked={selectedOption === "option6"}
                    onChange={handleOptionChange}
                    className={classes.circular_checkbox}
                  />
                  The Complete Railway Course
                </td>
              </tr>
              <tr>
                <td className={classes.displayflex}>
                  <input
                    type="checkbox"
                    value="option7"
                    checked={selectedOption === "option7"}
                    onChange={handleOptionChange}
                    className={classes.circular_checkbox}
                  />
                  Other Course
                </td>
              </tr>
              <tr>
                <td className={classes.displayflex}>
                  <input
                    type="checkbox"
                    value="option8"
                    checked={selectedOption === "option8"}
                    onChange={handleOptionChange}
                    className={classes.circular_checkbox}
                  />
                  None
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className={classes.inputbox}
                    type="text"
                    placeholder="&#128269;  Search Courses"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">&nbsp;</td>
              </tr>
            </tbody>
          </table>
          <button onClick={handlePrevStep} className={classes.nextnbackbtn}>
            Previous
          </button>
          <button onClick={handleNextStep} className={classes.nextnbackbtn}>
            Next
          </button>
        </div>
      )}
      {step === 3 && (
        <div>
          <table className={classes.nextfirstTable}>
            <tbody className={classes.tbody}>
              <tr>
                <td colSpan="3">
                  <h2>Create An Event</h2>
                </td>
                <td>
                  <button className={classes.cross_btn} onClick={crossHandler}>
                    &#10006;
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan="4">
                  <p>Step 2 of 2</p>
                </td>
              </tr>

              <tr>
                <td>
                  <form className={classes.form}>
                    <div className={classes.displayflex}>
                      <h3>{name}</h3>
                    </div>
                    <div className={classes.displayflex}>
                      <p>Reminder notification Before</p>

                      <p>&nbsp;&nbsp;{duration}&nbsp;&nbsp;</p>
                      <p>Not yet added to your calendar</p>
                    </div>
                  </form>
                </td>
              </tr>
              <tr>
                <td colSpan="3">Frequency</td>
              </tr>
              <tr className={classes.displayflex}>
                <td>
                  <button className={classes.btn}>Once</button>
                </td>
                <td>
                  <button className={classes.btn}>Daily</button>
                </td>
                <td>
                  <button className={classes.btn}>Weekly</button>
                </td>
                <td>
                  <button className={classes.btn}>Monthly</button>
                </td>
              </tr>
              <tr>
                <input className={classes.inputbox} type="date" />
              </tr>
              <tr>
                <td>
                  <h3>Duration</h3>
                </td>
              </tr>
              <tr className={classes.displayflex}>
                <td>
                  <button
                    className={classes.btn}
                    onClick={durationChangeHanndler1}
                  >
                    5 Min
                  </button>
                </td>
                <td>
                  <button
                    className={classes.btn}
                    onClick={durationChangeHanndler2}
                  >
                    10 Min
                  </button>
                </td>
                <td>
                  <button
                    className={classes.btn}
                    onClick={durationChangeHanndler3}
                  >
                    20 Min
                  </button>
                </td>
                <td>
                  <button
                    className={classes.btn}
                    onClick={durationChangeHanndler4}
                  >
                    30 Min
                  </button>
                </td>
                <td>
                  <button
                    className={classes.btn}
                    onClick={durationChangeHanndler5}
                  >
                    1h
                  </button>
                </td>
                <td>
                  <button
                    className={classes.btn}
                    onClick={durationChangeHanndler6}
                  >
                    Custom
                  </button>
                  {!duration1 && <CustomDuration />}
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Time</h3>
                </td>
              </tr>
              <tr>
                <td>
                  <input className={classes.inputbox2} type="time" />
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Reminder</h3>
                </td>
              </tr>
              <tr className={classes.tdata}>
                <td className={classes.tdata}>
                  <select
                    className={classes.tbdata}
                    defaultValue="Notification"
                  >
                    <option>Notification</option>
                    <option>E-Mail</option>
                  </select>
                </td>
                <td>
                  <input className={classes.counter} type="number" />
                </td>
                <td className={classes.tbdata}>
                  <select
                    className={classes.tbdata}
                    defaultValue="Minutes Before"
                  >
                    <option>Minutes Before</option>
                    <option>Hours Before</option>
                    <option>Day Before</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Email notifications only work with Google Calendar.</p>
                </td>
              </tr>

              <tr>
                <td>
                  <h3>End Date</h3>
                </td>
              </tr>
              <tr className={classes.displayflex}>
                <td>
                  <input
                    type="checkbox"
                    value="option8"
                    checked={selectedOption === "option8"}
                    onChange={handleOptionChange}
                    className={classes.circular_checkbox}
                  />
                </td>
                <td>
                  <p>Never</p>
                </td>
              </tr>
              <tr className={classes.displayflex}>
                <td>
                  <input
                    type="checkbox"
                    value="option9"
                    checked={selectedOption === "option9"}
                    onChange={handleOptionChange}
                    className={classes.circular_checkbox}
                  />
                </td>
                <td>
                  <input className={classes.inputbox} type="date" />
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={handlePrevStep} className={classes.nextnbackbtn}>
            Previous
          </button>
          <button
            type="submit"
            onChange={submitHandler}
            className={classes.nextnbackbtn}
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
}
