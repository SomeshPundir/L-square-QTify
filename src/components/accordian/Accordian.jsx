import React, { useState } from 'react';
import './Accordian.css';

const Accordion = () => {
  const [accordion1, setAccordion1] = useState(false);
  const [accordion2, setAccordion2] = useState(false);

  const toggleAccordion1 = () => {
    setAccordion1((prev) => !prev);
    setAccordion2(false); // Close the other accordion
  };

  const toggleAccordion2 = () => {
    setAccordion2((prev) => !prev);
    setAccordion1(false); // Close the other accordion
  };

  return (
    <div className="accordion-container">
    <h5>FAQ</h5>
      <div className={`accordion ${accordion1 ? 'open' : ''}`}>
        <button onClick={toggleAccordion1}>Is Qtify free to use</button>
        {accordion1 && <div className="accordion-content">Yes, Qtify is Completely Free to use.</div>}
      </div>
      <div className={`accordion ${accordion2 ? 'open' : ''}`}>
        <button onClick={toggleAccordion2}>Can I Download and listen to Songs</button>
        {accordion2 && <div className="accordion-content">No, you can only listen to songs. No downloading.</div>}
      </div>
    </div>
  );
};

export default Accordion;
