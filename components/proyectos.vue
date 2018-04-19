<template lang="pug">
  .proyectos
    h2.subtitulo Proyectos
    .proyecto
      .proyecto-descripcion
        h2 Platzi-planet
        small Vue
        p Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
        a.btn(href="#") Url
      .proyecto-img
        img(src="~/assets/vue.png")
    .proyecto
      .proyecto-descripcion
        h2 Platzi-planet
        a.btn(href="#") Url
      .proyecto-img
        img(src="~/assets/react.png")
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
    align-items: center
    grid-template-columns: 1fr 1fr
    margin: 10px
    padding: 20px
    // border-radius: 5px
    // box-shadow: 0 0 2px 2px #A9A9A9
    border-bottom: 1px solid #808080

    .proyecto-img
      img
        width: 80%
</style>
