<template lang="pug">
  .header.center
    figure
      img.img(src="~static/perfil.jpg")
    .botones
      router-link.btn-link(to="/") About
      router-link.btn-link(to="/proyectos") Proyectos
    p Contacto

</template>

<script>

  export default {
    name: 'my-header'
  }
</script>

<style lang="sass" scoped>

.header
  background-color: #42E0C3
  position: relative
  height: 100vh
  grid-gap: 10px
  color: #526488
  .img
    width: 100%
    border-radius: 50%
    box-shadow: 0px 3px 5px 2px rgba(0,0,0,.2)

.btn-link
  text-decoration: none
  padding: 10px 20px
  border: 1px solid #1f1f1f
  border-radius: 5px
  margin: 5px
  transition: all .2s
  &:hover 
    background-color: #526488
    color: #fff
  &:active
    transform: scale(.5)
</style>
