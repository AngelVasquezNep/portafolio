<template lang="pug">
  .experiencia.center
    h2.subtitulo Stack
    .item.item1
      .icons
        img(src="~/assets/github.png")
        img(src="~/assets/webpack.png")
      h3 GitHub - Webpack  
    .item.item2
      .icons
        img(src="~/assets/vue.png")
        img(src="~/assets/react.png")
      h3 Vue - React
    .item.item3
      .icons
        img(src="~/assets/sass.png")
        img(src="~/assets/pug.jpg")
        img(src="~/assets/grid.png")
      h3 Sass - Pug - Css Grid
</template>

<style lang="sass" scoped>
  .experiencia
    padding-top: 20px
    padding-bottom: 50px
    grid-template-columns: repeat(3, 1fr)
    grid-gap: 20px
    margin: 20px
    color: #2C2C2C
    font-family: 'Lato', sans-serif;
    @media screen and (max-width: 768px)
      grid-template-columns: 1fr
      .item
        img
          width: 100px
    .subtitulo
      font-size: 2.5em
  .item
    display: grid
    grid-row-gap: 10px 
    .icons
      justify-content: center
      display: grid
      align-items: center
      grid-auto-flow: column
    img
      width: 80px
      margin: 5px
    @media screen and (max-width: 500px)
      img
        max-width: 50px !important

  .subtitulo
    grid-column: 1 / -1
</style>
