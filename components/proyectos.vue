<template lang="pug">
  .proyectos
    h2.subtitulo Proyectos
    
    .proyecto
      .proyecto-descripcion
        h2 Platzi-planet
        small Vue.js
        ul
          li Platzi-planet es una aplicación creada con Vue.js
          li Usa la 
            | 
            a(href="https://api.nasa.gov/index.html", target="_blank") API 
            | de la NASA
          li Tiene un estado con Vuex y un ruteo del lado del cliente con Router-vue
          li Responsive
        a.git(target="_blank", href="https://github.com/angelvasqueznep/platzi-planet")
          img(src="~/assets/github.png", alt="Platzi-planet")
        a.btn(target="_blank", href="https://platzi-planet.now.sh") Platzi-planet
      .proyecto-img
        a(target="_blank", href="https://platzi-planet.now.sh")
          img(src="~/assets/proyectos/platzi-planet.png", alt="Platzi-planet")
    


    .proyecto
      .proyecto-descripcion
        h2 Asomas
        small Vue.js - Nuxt
        ul
          li Asomas es una Organización sin fines de lucro
          li Su página original tenía áreas de oportunidad y me decidí regalarles ésta.
          li Usa ruteo del lado del cliente con Nuxt
          li Responsive
        a.git(target="_blank", href="https://github.com/angelvasqueznep/asomas")
          img(src="~/assets/github.png", alt="Asomas")
        a.btn(target="_blank", href="https://asomas.now.sh/") Asomas
      .proyecto-img
        a(target="_blank", href="https://asomas.now.sh/") 
          img(src="~/assets/proyectos/asomas.png", alt="Asomas")
    
    
    .proyecto
      .proyecto-descripcion
        h2 Platzi-video
        small React.js
        ul
          li Platzi-video es una aplicación creada con React.js
          li Uso de la API de Video de HTML5
          li Componentes reutilizables
          li Responsive
        a.git(target="_blank", href="https://github.com/angelvasqueznep/platzi-video")
          img(src="~/assets/github.png", alt="Platzi-video")
        a.btn(target="_blank", href="https://platzi-video.now.sh/") Platzi-video
      .proyecto-img
        a(target="_blank", href="https://platzi-video.now.sh/")
          img(src="~/assets/proyectos/platzi-video.png", alt="Platzi-video")
    
    
    .proyecto
      .proyecto-descripcion
        h2 iVuesic
        small Vue.js - Nuxt
        ul
          li Platzi-planet es una aplicación creada con Nuxt
          li Usa una API provista por Platzi a través de Spotify
          li Tiene un estado con Vuex y un ruteo del lado del cliente con Router-vue
          li Es muy divertida
        a.git(target="_blank", href="https://github.com/angelvasqueznep/ivuesic")
          img(src="~/assets/github.png", alt="iVuesic")
        a.btn(target="_blank", href="https://ivuesic.now.sh/") iVuesic
      .proyecto-img
        a(target="_blank", href="https://ivuesic.now.sh/")
          img(src="~/assets/proyectos/ivuesic.png", alt="iVuesic")
    
    
    .proyecto
      .proyecto-descripcion
        h2 Layout
        small Vue.js - Nuxt
        ul
          li Layout es página que muestra el poder de CSS Grid Layout
          li Se maqueto 
            | 
            a(href="https://www.instagram.com/", target="_blank") Instagram 
            | y 
            a(href="https://www.pinterest.com.mx/", target="_blank") Pinterest
          li Es Full Responsive
        a.git(target="_blank", href="https://github.com/angelvasqueznep/layout")
          img(src="~/assets/github.png", alt="Layout")
        a.btn(target="_blank", href="https://layout.now.sh/") Layout
      .proyecto-img
        a(target="_blank", href="https://layout.now.sh/")
          img(src="~/assets/proyectos/layout.png", alt="Layout")
    
    
    .proyecto
      .proyecto-descripcion
        h2 Invie
        small Vanillia.js
        ul
          li StartUp de las guitarras más locas
          li Menú Responsive off-canvas
          li Lazi-loading
        a.git(target="_blank", href="https://github.com/angelvasqueznep/inviegit")
          img(src="~/assets/github.png", alt="Layout")
        a.btn(target="_blank", href="https://invie-sibles.now.sh/") Invie
      .proyecto-img
        a(target="_blank", href="https://invie-sibles.now.sh/")
          img(src="~/assets/proyectos/invie.png", alt="Invie")
    
    
    .proyecto
      .proyecto-descripcion
        h2 Platzi-music
        small Vue.js
        ul
          li Página construida con Vue.js
          li Se usa la API de 
            | 
            a(href="https://www.last.fm/es/api", target="_blank") Last FM
          li Es Full Responsive
        a.git(target="_blank", href="https://github.com/angelvasqueznep/layout")
          img(src="~/assets/github.png", alt="Layout")
        a.btn(target="_blank", href="https://layout.now.sh/") Platzi-music
      .proyecto-img
        a(target="_blank", href="https://layout.now.sh/")
          img(src="~/assets/proyectos/platzi-music.png", alt="Platzi-music")
    
    
    .proyecto
      .proyecto-descripcion
        h2 Platzipalooza
        small Foundation
        ul
          li El evento más esperado del año
          li Se maqueto con 
            | 
            a(href="https://foundation.zurb.com/", target="_blank") Foundation
          li Es Full Responsive
        a.git(target="_blank", href="https://github.com/angelvasqueznep/layout")
          img(src="~/assets/github.png", alt="Layout")
        a.btn(target="_blank", href="https://layout.now.sh/") Foundation
      .proyecto-img
        a(target="_blank", href="https://layout.now.sh/")
          img(src="~/assets/proyectos/platzi-palooza.png", alt="Foundation")
    

</template>

<style lang="sass" scoped>
.proyectos
  font-family: 'Lato', sans-serif;  
  padding-top: 20px
  display: grid
  line-height: 30px
  // grid-gap: 10px
  background-color: #f1f1f1
  .subtitulo
    font-size: 2.5em
  .proyecto
    align-items: center
    display: grid
    grid-template-columns: 1fr 1fr
    margin: 10px
    padding: 30px
    @media screen and (max-width:1100px)
      padding: 30px 0
    @media screen and (max-width:950px)
      grid-template-columns: 1fr
      grid-gap: 10px
      .proyecto-img
        img
          width: 90% !important
          margin: 10px 0 
    // border-radius: 5px
    // box-shadow: 0 0 2px 2px #A9A9A9
    // border-bottom: 1px solid #808080

    .proyecto-descripcion
      width: 90%
      justify-self: center
      text-align: left
      display: grid
      h2
        font-size: 2em
        margin: 0

    .proyecto-img
      &:hover
        img
          transform: translateY(-10px) scale(1.01)
          box-shadow: 0 0 3px 3px #696969

      img
        transition: all .3s
        width: 100%
        border-radius: 20px
        box-shadow: 0 0 4px 2px #A9A9A9
  .btn
    text-align: center
    margin: 5px
  .git
    justify-self: center
    img
      margin: 0
      width: 30px
</style>
