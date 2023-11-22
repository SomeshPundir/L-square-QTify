import React, { useState } from 'react';
import './FeedbackForm.css'; // Import your CSS file

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    description: '',
  });
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., send data to a server or perform some action
    console.log('Form submitted:', formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      description: '',
    });
    // Hide the form
    setShowForm(false);
  };

  const handleFeedbackClick = () => {
    // Show the form when the feedback button is clicked
    setShowForm(true);
  };

  return (
    <div>
      <button onClick={handleFeedbackClick}>Give Feedback</button>
      {showForm && (
        <div className="feedback-overlay">
          <div className="feedback-form-container">
            <h2>Feedback Form</h2>
            <form onSubmit={handleSubmit}>
              {/* ... (form fields) ... */}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
