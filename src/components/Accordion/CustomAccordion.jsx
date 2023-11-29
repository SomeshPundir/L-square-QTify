// Import necessary dependencies and styles
import React, { useState } from "react";
import styles from "./CustomAccordion.module.css";
import { ReactComponent as UpArrowIcon } from "../../assets/upArrow.svg";
import { ReactComponent as DownArrowIcon } from "../../assets/downArrow.svg";

// Functional component definition for CustomAccordion
const CustomAccordion = ({ data }) => {
  // State to track whether the answer is visible or hidden
  const [show, setShow] = useState(false);

  // Function to toggle the visibility of the answer
  const _handleClick = () => {
    setShow(!show);
  };

  // Destructure the 'data' prop to get 'question' and 'answer'
  const { question, answer } = data;

  // Render the CustomAccordion component
  return (
    <div className={styles.wrapper}>
      {/* Question section */}
      <div className={styles.questionWrapper}>
        {/* Display the question */}
        <h3>{question}</h3>
        {/* Clickable area to toggle answer visibility */}
        <p onClick={_handleClick}>
          {/* Display either UpArrowIcon or DownArrowIcon based on the 'show' state */}
          {show ? <UpArrowIcon /> : <DownArrowIcon />}
        </p>
      </div>

      {/* Answer section (displayed only if 'show' is true) */}
      {show && <p className={styles.answerWrapper}>{answer}</p>}
    </div>
  );
};

// Export the CustomAccordion component
export default CustomAccordion;
