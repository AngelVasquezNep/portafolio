<template lang="pug">
  .proyectos
    h2.subtitulo Proyectos
    
    .proyecto
      .proyecto-descripcion
        h2 Platzi-planet
        small Vue
        ul
          li Platzi-planet es una aplicación creada con Vue.js
          li Usa la API de la NASA
          li Tiene un estado con Vuex y un ruteo del lado del cliente con Router-vue
          li Responsive
        a.git(href="#")
          img(src="~/assets/github.png")
        a.btn(href="#") Url
      .proyecto-img
        img(src="~/assets/vue.png")

</template>

<style lang="sass" scoped>
.proyectos
  font-family: 'Lato', sans-serif;  
  padding-top: 20px
  display: grid
  // grid-gap: 10px
  background-color: #f1f1f1
  .subtitulo
    font-size: 2.5em
  .proyecto
    display: grid
    // align-items: center
    grid-template-columns: 1fr 1fr
    margin: 10px
    padding: 20px
    // border-radius: 5px
    // box-shadow: 0 0 2px 2px #A9A9A9
    border-bottom: 1px solid #808080

    .proyecto-descripcion
      text-align: left
      display: grid
      h2
        font-size: 2em
        margin: 0

    .proyecto-img
      img
        width: 50%
  .btn
    text-align: center
    margin: 5px
  .git
    justify-self: center
    img
      margin: 0
      width: 30px
</style>
