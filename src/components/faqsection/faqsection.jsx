import React from 'react';
import AccordionComponent from '../accordian/Accordian'; 
import "./faqsection.css"
const FAQSection = () => {
  const faqData = [
    {
      title: 'Question 1',
      content: 'Answer 1',
    },
    {
      title: 'Question 2',
      content: 'Answer 2',
    },
     {
      title: 'Question 3',
      content: 'Answer 3',
    }
    // Add more FAQ items as needed
  ];
  return (
    <div>
    <h3>FAQ</h3>
      {faqData.map((faqItem, index) => (
       
        <AccordionComponent key={index} title={faqItem.title} content={faqItem.content} />
      ))}
    </div>
  );
};

export default FAQSection;


