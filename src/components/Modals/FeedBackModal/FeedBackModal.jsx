// Import necessary dependencies and styles
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles from "./FeedBackModal.module.css";
import { ReactComponent as CrossBtn } from "../../../assets/crossBtn.svg";
import { errorHandler } from "../../../config/helper-methods";

// Style configuration for the modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// Functional component definition for FeedBackModal
const FeedBackModal = ({ isOpen, onSuccess, onDismiss }) => {
  // State to manage form fields
  const [formFields, setFormFields] = useState({
    fullName: "",
    emailId: "",
    subject: "",
    description: "",
  });

  // Function to reset form fields to initial state
  const _resetState = () => {
    const newFormFields = { ...formFields };
    Object.keys(newFormFields).forEach((key) => (newFormFields[key] = ""));
    setFormFields(newFormFields);
  };

  // Function to handle success action and close the modal
  const _onSuccess = () => {
    onSuccess();
    _handleClose();
  };

  // Function to close the modal and reset form fields
  const _handleClose = () => {
    _resetState();
    onDismiss();
  };

  // Function to handle input field changes
  const _handleChange = (name, event) => {
    const value = event.target.value;
    setFormFields((prevFormFields) => ({
      ...prevFormFields,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const _handleSubmit = () => {
    const { fullName, emailId, subject, description } = formFields;
    if (!fullName || !emailId || !subject || !description) {
      errorHandler({ reason: "Please fill in all required fields." });
      return;
    }
    // Perform API call or other submission logic
    _onSuccess();
  };

  // Destructure form fields
  const { fullName, emailId, subject, description } = formFields;

  // Render the FeedBackModal component
  return (
    <div>
      {/* Modal component */}
      <Modal
        className={styles.modalWrapper}
        open={isOpen}
        onClose={_handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* Box component for modal styling */}
        <Box sx={style} className={styles.wrapper}>
          {/* Modal header */}
          <div className={styles.header}>
            <h3>Feedback</h3>
            <h4 onClick={_handleClose}>{<CrossBtn />}</h4>
          </div>

          {/* Form input wrapper */}
          <div className={styles.inputWrapper}>
            {/* Full name input */}
            <input
              className={styles.input}
              placeholder="Full name"
              type="text"
              value={fullName}
              name="fullName"
              onChange={(e) => {
                _handleChange("fullName", e);
              }}
            />
            {/* Email ID input */}
            <input
              className={styles.input}
              placeholder="Email ID"
              type="email"
              value={emailId}
              name="emailId"
              onChange={(e) => {
                _handleChange("emailId", e);
              }}
            />
            {/* Subject input */}
            <input
              className={styles.input}
              placeholder="Subject"
              type="text"
              value={subject}
              name="subject"
              onChange={(e) => {
                _handleChange("subject", e);
              }}
            />
            {/* Description textarea */}
            <textarea
              className={styles.description}
              placeholder="Description"
              value={description}
              name="description"
              onChange={(e) => {
                _handleChange("description", e);
              }}
            />
          </div>

          {/* Submission button */}
          <div>
            <div onClick={_handleSubmit} className={styles.btnContainer}>
              Submit Feedback
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

// Export the FeedBackModal component
export default FeedBackModal;
