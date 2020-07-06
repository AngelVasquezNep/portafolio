import React from "react";
import Head from "next/head";
import classnames from "classnames";

import Header from "components/Header";
import Projects from "components/Projects";
import About from "components/About";
import Contacto from "components/Contact";

import styles from "./index.module.css";

const Index = () => {
  const handleDown = (evt, id) => {
    evt.preventDefault();
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  return (
    <main>
      <Head>
        <link rel="icon" href="/a.png" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato"
          rel="stylesheet"
        />
      </Head>

      <section>
        <div className={styles["index-container"]}>
          <div className={classnames(styles["index"], "center")}>
            <Header handleDown={handleDown}/>
            <h1 className={styles["title"]}>Luis Ángel Vásquez Nepomuceno</h1>
            <h2 className={styles["subtitle"]}>Desarrollador Front end</h2>
            <a className={styles["down"]} href="#about" onClick={(event) => handleDown(event, 'about')}>
              <img src="/down.png" />
            </a>
          </div>
        </div>

        <About />

        <Projects />
      </section>

      <footer>
        <div id="contacto">
          <Contacto />
        </div>
      </footer>
    </main>
  );
};

export default Index;
