import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.first_col}>
        <h1 className={styles.company_name}>Qtify</h1>
        <div className={styles.company_description}>
          Qtify redefines digital music with a sophisticated service offering
          millions of songs and diverse global content. Meticulously designed
          for a seamless and enriched streaming experience, Qtify empowers users
          to explore a vast array of genres, ensuring a personalized
          entertainment journey on a global scale.
        </div>
      </div>
      <div className={styles.second_col}>
        <h2 className={styles.link_header}>Contact</h2>
        <ul className={styles.link_items}>
          <li>Devrishi Enclave 7, Dehradun</li>
          <li>Uttrakhand, India</li>

          <li>pundirsomesh@gmail.com</li>
          <li>+91 9027120314</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
