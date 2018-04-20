<template lang="pug">
  .about
    h2 ¿Quién soy?
    p Mi nombre es Ángel Vásquez, soy psicólogo egresado de la UNAM, estudie un tiempo matemáticas en la UAM y programación en Platzi, aquí me certifique como Arquitecto Front end y en muchos otros cursos. 
    p Hace poco empece a escribir para la revista del Colegio de Bachilleres sobre temas de educación online.
    p Con mis nuevos súper poderes de programación quiero hacer algo a lo que llamo 'Front end Social', la idea es construir páginas para organizaciones de la sociedad civíl que no tengan o que quieran modificarla
      | 
      small (Si conoces a alguien que quiera ayuda, pidele que me contacte).
</template>

<style lang="sass" scoped>

  .about
    font-family: 'Lato', sans-serif;
    background-color: #011627
    color: #fff
    display: grid
    justify-content: center
    line-height: 40px
    padding: 30px 0
    font-size: 20px
    animation: fondo 20s infinite linear alternate
    @keyframes fondo
      0%
      100%
        background: #2B2D42
    p
      margin: 10px auto
      width: 80%
</style>
