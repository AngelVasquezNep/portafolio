import React from "react";
import classnames from "classnames";

import styles from "./Header.module.sass";

const Header = ({ handleDown }) => (
  <div className={classnames(styles["header"], "center")}>
    <figure>
      <img
        className={styles["img"]}
        src="/perfil.jpg"
        alt="Luis Ángel Vásquez Nepomuceno"
      />
    </figure>
    <div className={styles["botones"]}>
      <a
        className={styles["btn-link"]}
        href="#proyects"
        onClick={(event) => handleDown(event, "projects")}
      >
        Proyectos
      </a>
      <a
        className={styles["btn-link"]}
        href="#contacto"
        onClick={(event) => handleDown(event, "contacto")}
      >
        Contacto
      </a>
    </div>
  </div>
);

export default Header;
