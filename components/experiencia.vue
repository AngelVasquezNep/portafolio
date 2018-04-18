<template lang="pug">
  .experiencia.center
    h2.subtitulo Mi experiencia
    .item.item1
      img(src="~/assets/down.png")
      h3 UI y diseño por componentes
      p Hacer que el usuario pueda navegar por productos sencillos y con patrones reconocibles, así como innovadores, es algo importante.
    .item.item2
      img(src="~/assets/down.png")
      h3 Vue and React
      p Para construir interfaces funcionales me valgo del poder de estos dos grandes Frameworks lideres de la industria por su versatilidad, reactividad y performance.
    .item.item3
      img(src="~/assets/down.png")
      h3 HTML5-CSS3-Vanillia.js
      p Me mantengo al día con los elementos básicos del negocio. Desde las API de media hasta las trancisiones y animaciones, babel.
</template>

<style lang="sass" scoped>
  .experiencia
    font-size: 1.4em
    grid-template-columns: repeat(3, 1fr)
    grid-template-areas: "titulo titulo titulo" "item1 item2 item3"
    grid-gap: 20px
    margin: 20px
    color: #2C2C2C
    font-family: 'Lato', sans-serif;


  .subtitulo
    grid-area: titulo
  .item1
    grid-area: item1
  .item2
    grid-area: item2
  .item3
    grid-area: item3
</style>
