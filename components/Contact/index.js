import React from "react";

import styles from "./Contact.module.css";

const Contact = () => (
  <div className={styles["contacto"]}>
    <p className={styles["copy"]}>© Copyright 2018 Ángel Vásquez</p>
    <span>
      <a href="https://github.com/angelvasqueznep" target="_blank">
        <img src="/github.png" alt="github" />
      </a>
    </span>
    <span>
      <a href="https://twitter.com/angelvasqueznep" target="_blank">
        <img src="/twitter.png" alt="twitter" />
      </a>
    </span>
    <span>
      <a
        href="https://www.linkedin.com/in/ángel-vásquez-nepomuceno/"
        target="_blank"
      >
        <img src="/linkedin.png" alt="linkedin" />
      </a>
    </span>
    <span>
      <a href="mailto:angel.vasquez.unam@gmail.com" target="_blank">
        <img src="/mail.png" alt="mail" />
      </a>
    </span>
  </div>
);

export default Contact;
