<template lang="pug">
  .header.center
    figure
      img.img(src="~static/perfil.jpg", alt="Luis Ángel Vásquez Nepomuceno")
    .botones
      a.btn-link(href="#proyectos", @click="down($event, 'proyectos')") Proyectos
      a.btn-link(href="#proyectos", @click="down($event, 'contacto')") Contacto

</template>

<script>

  export default {
    name: 'my-header',
    methods: {
      down (evt, obj) {
      evt.preventDefault()
        document.getElementById(obj).scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
      },
      scroll (top, altura) {
        // let algo = window.pageYOffset || docEl.scrollTop || body.scrollTop
        if(top > altura) {
        }
      }
    },
    mounted() {
      const $proyectos = document.getElementById('proyectos')
      window.addEventListener('scroll', (e) => { 
        let top = window.scrollY
        this.scroll(top, $proyectos.offsetTop)
       })
    }
  }
</script>

<style lang="sass" scoped>

.header
  display: grid
  position: relative
  grid-gap: 10px
  color: #526488
  grid-template-columns: auto auto
  justify-content: space-between
  margin: 0 10px
  @media screen and (max-width: 600px)
    grid-template-columns: 1fr
    justify-content: center
    .botones
      display: grid
      justify-content: center
    .img
      width: 100px !important
  figure 
    margin: 10px
  .img
    width: 70px
    border-radius: 50%
    box-shadow: 0px 3px 5px 2px rgba(0,0,0,.2)
  .botones
    display: flex

.btn-link
  text-decoration: none
  padding: 10px 20px
  border: 1px solid #1f1f1f
  border-radius: 5px
  margin: 5px
  transition: all .2s
  outline: none
  background-color: #FDFFFC
  color: #011627
  &:hover, &:focus
    color: #FDFFFC
    background-color: #2EC4B6
  &:active
    transform: scale(.9)
</style>
