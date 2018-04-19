<template lang="pug">
  .experiencia.center
    h2.subtitulo Stack
    .item.item1
      .icons
        img(src="~/assets/github.png")
        img(src="~/assets/webpack.png")
        img(src="~/assets/sass.png")
        img(src="~/assets/grid.png")
      h3 Git - Webpack - Sass - CSS Grid 
    .item.item2
      .icons
        img(src="~/assets/vue.png")
        img(src="~/assets/react.png")
      h3 Vue - React
    .item.item3
      .icons
        img(src="~/assets/state.png")
        img(src="~/assets/router.png")
      h3 State - Router
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
  .item
    .icons
      justify-content: center
      display: grid
      align-items: center
      grid-auto-flow: column
    img
      width: 70px
      margin: 5px

  .subtitulo
    grid-area: titulo
  .item1
    grid-area: item1
  .item2
    grid-area: item2
  .item3
    grid-area: item3
</style>
