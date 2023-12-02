import React from "react";
import classnames from "classnames";

import styles from "./Header.module.sass";

const Header = () => (
  <div className={classnames(styles["header"], "center")}>
    <figure>
      <img
        className={styles["img"]}
        src="/perfil.jpg"
        alt="Luis Ángel Vásquez Nepomuceno"
      />
    </figure>
  </div>
);

export default Header;
