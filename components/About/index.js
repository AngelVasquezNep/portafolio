import React from "react";

import styles from "./About.module.css";

const About = () => (
  <div id="about" className={styles["about"]}>
    <h2>Hola, Soy Angelito 🚀</h2>
    <p>Soy un ñoño, me gusta gusta el sushi y los perritos esponjosos.</p>

    <p>
      Trabajo con React y algunas cosas lindas de su ecosistema (como redux,
      redux-saga, react native, redux-form, etc.)
    </p>

    <p>
      Ahora estoy aprendiendo de Python, Flask, Django, Bases de datos
      relacionales y un poquito de Flutter.
    </p>

    <p className={styles['warning']}>
      Proximamente actualizaré este sitio (y muchos de mis proyectos) ya que
      son muy viejos y algunos links están rotos. <br />
      Hoy (5/jul/2020) sólo lo pase de Nuxt.js (Vue) a
      Next.js (React).
    </p>
  </div>
);

export default About;
