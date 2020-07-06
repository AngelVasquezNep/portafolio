import React from "react";

import styles from "./Projects.module.sass";

const Projects = () => (
  <div id="projects" className={styles["proyects"]}>
    <h2 className={styles["subtitulo"]}>Proyectos</h2>
    <div className={styles["proyecto"]}>
      <div className={styles["proyecto-descripcion"]}>
        <h2>FaceShows</h2>
        <small>React</small>
        <ul>
          <li>
            <strong>En construncción</strong>
          </li>
          <li>Usa una API de música</li>
          <li>
            El objetivo es recrear la mayor cantidad de funcionalidad de
            Facebook
          </li>
          <li>Aún no es responsive</li>
        </ul>
        <a
          className={styles["git"]}
          target="_blank"
          href="https://github.com/angelvasqueznep/faceshows"
        >
          <img src="/github.png" alt="Faceshows" />
        </a>
        <a
          className={styles["btn"]}
          target="_blank"
          href="https://faceshows.now.sh"
        >
          Faceshows
        </a>
      </div>
      <div className={styles["proyecto-img"]}>
        <a target="_blank" href="https://faceshows.now.sh">
          <img src="/proyects/faceshows.png" alt="Faceshows" />
        </a>
      </div>
    </div>
    <div className={styles["proyecto"]}>
      <div className={styles["proyecto-descripcion"]}>
        <h2>Platzi-planet</h2>
        <small>Vue.js</small>
        <ul>
          <li>Platzi-planet es una aplicación creada con Vue.js</li>
          <li>
            Usa la{" "}
            <a href="https://api.nasa.gov/index.html" target="_blank">
              API de la NASA
            </a>
          </li>
          <li>
            Tiene un estado con Vuex y un ruteo del lado del cliente con
            Router-vue
          </li>
          <li>Responsive</li>
        </ul>
        <a
          className={styles["git"]}
          target="_blank"
          href="https://github.com/angelvasqueznep/platzi-planet"
        >
          <img src="/github.png" alt="Platzi-planet" />
        </a>
        <a
          className={styles["btn"]}
          target="_blank"
          href="https://platzi-planet.now.sh"
        >
          Platzi-planet
        </a>
      </div>
      <div className={styles["proyecto-img"]}>
        <a target="_blank" href="https://platzi-planet.now.sh">
          <img src="/proyects/platzi-planet.png" alt="Platzi-planet" />
        </a>
      </div>
    </div>
    <div className={styles["proyecto"]}>
      <div className={styles["proyecto-descripcion"]}>
        <h2>Asomas</h2>
        <small>Vue.js - Nuxt</small>
        <ul>
          <li>Asomas es una Organización sin fines de lucro</li>
          <li>
            Su página original tenía áreas de oportunidad y me decidí regalarles
            ésta.
          </li>
          <li>Usa ruteo del lado del cliente con Nuxt</li>
          <li>Responsive</li>
        </ul>
        <a
          className={styles["git"]}
          target="_blank"
          href="https://github.com/angelvasqueznep/asomas"
        >
          <img src="/github.png" alt="Asomas" />
        </a>
        <a
          className={styles["btn"]}
          target="_blank"
          href="https://asomas.now.sh/"
        >
          Asomas
        </a>
      </div>
      <div className={styles["proyecto-img"]}>
        <a target="_blank" href="https://asomas.now.sh/">
          {" "}
          <img src="/proyects/asomas.png" alt="Asomas" />
        </a>
      </div>
    </div>
    <div className={styles["proyecto"]}>
      <div className={styles["proyecto-descripcion"]}>
        <h2>Platzi-video</h2>
        <small>React.js</small>
        <ul>
          <li>Platzi-video es una aplicación creada con React.js</li>
          <li>Uso de la API de Video de HTML5</li>
          <li>Componentes reutilizables</li>
          <li>Responsive</li>
        </ul>
        <a
          className={styles["git"]}
          target="_blank"
          href="https://github.com/angelvasqueznep/platzi-video"
        >
          <img src="/github.png" alt="Platzi-video" />
        </a>
        <a
          className={styles["btn"]}
          target="_blank"
          href="https://platzi-video.now.sh/"
        >
          Platzi-video
        </a>
      </div>
      <div className={styles["proyecto-img"]}>
        <a target="_blank" href="https://platzi-video.now.sh/">
          <img src="/proyects/platzi-video.png" alt="Platzi-video" />
        </a>
      </div>
    </div>
    <div className={styles["proyecto"]}>
      <div className={styles["proyecto-descripcion"]}>
        <h2>iVuesic</h2>
        <small>Vue.js - Nuxt</small>
        <ul>
          <li>Platzi-planet es una aplicación creada con Nuxt</li>
          <li>Usa una API provista por Platzi a través de Spotify</li>
          <li>
            Tiene un estado con Vuex y un ruteo del lado del cliente con
            Router-vue
          </li>
          <li>Es muy divertida</li>
        </ul>
        <a
          className={styles["git"]}
          target="_blank"
          href="https://github.com/angelvasqueznep/ivuesic"
        >
          <img src="/github.png" alt="iVuesic" />
        </a>
        <a
          className={styles["btn"]}
          target="_blank"
          href="https://ivuesic.now.sh/"
        >
          iVuesic
        </a>
      </div>
      <div className={styles["proyecto-img"]}>
        <a target="_blank" href="https://ivuesic.now.sh/">
          <img src="/proyects/ivuesic.png" alt="iVuesic" />
        </a>
      </div>
    </div>
    <div className={styles["proyecto"]}>
      <div className={styles["proyecto-descripcion"]}>
        <h2>Layout</h2>
        <small>Vue.js - Nuxt</small>
        <ul>
          <li>Layout es página que muestra el poder de CSS Grid Layout</li>
          <li>
            Se maqueto{" "}
            <a href="https://www.instagram.com/" target="_blank">
              Instagram{" "}
            </a>
            y{" "}
            <a href="https://www.pinterest.com.mx/" target="_blank">
              Pinterest
            </a>
          </li>
          <li>Es Full Responsive</li>
        </ul>
        <a
          className={styles["git"]}
          target="_blank"
          href="https://github.com/angelvasqueznep/layout"
        >
          <img src="/github.png" alt="Layout" />
        </a>
        <a
          className={styles["btn"]}
          target="_blank"
          href="https://layout.now.sh/"
        >
          Layout
        </a>
      </div>
      <div className={styles["proyecto-img"]}>
        <a target="_blank" href="https://layout.now.sh/">
          <img src="/proyects/layout.png" alt="Layout" />
        </a>
      </div>
    </div>
    <div className={styles["proyecto"]}>
      <div className={styles["proyecto-descripcion"]}>
        <h2>Jon Snow</h2>
        <small>React</small>
        <ul>
          <li>Jon Snow es tan honorable que quise hacerle una página</li>
          <li>Se construyo con React</li>
          <li>
            Usa la{" "}
            <a href="https://api.got.show/doc/" target="_blank">
              API de GOT
            </a>
          </li>
        </ul>
        <a
          className={styles["git"]}
          target="_blank"
          href="https://github.com/angelvasqueznep/jonsnow"
        >
          <img src="/github.png" alt="Jon Snow" />
        </a>
        <a
          className={styles["btn"]}
          target="_blank"
          href="https://jons.now.sh/"
        >
          Jon Snow
        </a>
      </div>
      <div className={styles["proyecto-img"]}>
        <a target="_blank" href="https://jons.now.sh/">
          <img src="/proyects/jonsnow-1.png" alt="Jon Snow" />
        </a>
      </div>
    </div>
    <div className={styles["proyecto"]}>
      <div className={styles["proyecto-descripcion"]}>
        <h2>Invie</h2>
        <small>Vanillia.js</small>
        <ul>
          <li>StartUp de las guitarras más locas</li>
          <li>Menú Responsive off-canvas</li>
          <li>Lazi-loading</li>
        </ul>
        <a
          className={styles["git"]}
          target="_blank"
          href="https://github.com/angelvasqueznep/inviegit"
        >
          <img src="/github.png" alt="Layout" />
        </a>
        <a
          className={styles["btn"]}
          target="_blank"
          href="https://invie-sibles.now.sh/"
        >
          Invie
        </a>
      </div>
      <div className={styles["proyecto-img"]}>
        <a target="_blank" href="https://invie-sibles.now.sh/">
          <img src="/proyects/invie.png" alt="Invie" />
        </a>
      </div>
    </div>
    <div className={styles["proyecto"]}>
      <div className={styles["proyecto-descripcion"]}>
        <h2>Platzi-music</h2>
        <small>Vue.js</small>
        <ul>
          <li>Página construida con Vue.js</li>
          <li>
            Se usa la API de{" "}
            <a href="https://www.last.fm/es/api" target="_blank">
              Last FM
            </a>
          </li>
          <li>Es Full Responsive</li>
        </ul>
        <a
          className={styles["git"]}
          target="_blank"
          href="https://github.com/angelvasqueznep/layout"
        >
          <img src="/github.png" alt="Layout" />
        </a>
        <a
          className={styles["btn"]}
          target="_blank"
          href="https://layout.now.sh/"
        >
          Platzi-music
        </a>
      </div>
      <div className={styles["proyecto-img"]}>
        <a target="_blank" href="https://layout.now.sh/">
          <img src="/proyects/platzi-music.png" alt="Platzi-music" />
        </a>
      </div>
    </div>
    <div className={styles["proyecto"]}>
      <div className={styles["proyecto-descripcion"]}>
        <h2>Platzipalooza</h2>
        <small>Foundation</small>
        <ul>
          <li>El evento más esperado del año</li>
          <li>
            Se maqueto con{" "}
            <a href="https://foundation.zurb.com/" target="_blank">
              Foundation
            </a>
          </li>
          <li>Es Full Responsive</li>
        </ul>
        <a
          className={styles["git"]}
          target="_blank"
          href="https://github.com/angelvasqueznep/layout"
        >
          <img src="/github.png" alt="Layout" />
        </a>
        <a
          className={styles["btn"]}
          target="_blank"
          href="https://layout.now.sh/"
        >
          Platzipalooza
        </a>
      </div>
      <div className={styles["proyecto-img"]}>
        <a target="_blank" href="https://layout.now.sh/">
          <img src="/proyects/platzi-palooza.png" alt="Foundation" />
        </a>
      </div>
    </div>
  </div>
);

export default Projects;
