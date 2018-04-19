<template lang="pug">
  .proyecto
      .proyecto-descripcion
        h2 {{proyecto.name}}
        small {{proyecto.framework}}
        ul
          li(v-for="caracteristica in proyecto.caracteristicas") {{ caracteristica }}

        a.git(target="_blank", :href="proyecto.repo")
          img(:src="proyecto.imgGit", :alt="proyecto.name")
        a.btn(target="_blank", :href="proyecto.site") {{ proyecto.name }}
      .proyecto-img(@mouseover="show = !show" )
        a(target="_blank", :href="proyecto.site")
          transition(name="img")
            img(v-if=" props.media == 'lap' ", :src="proyecto.imgLap", :alt="proyecto.name")
            img(v-if=" props.media == 'mobile' ", :src="proyecto.imgMobile", :alt="proyecto.name")

</template>

<script>
export default {
  name: 'proyecto',
  props: ['proyecto'],
  data () {
    return {
      show: true
    }
  }
}
</script>


<style lang="sass" scoped>
  .proyecto
    align-items: center
    display: grid
    grid-template-columns: 1fr 1fr
    margin: 10px
    padding: 30px
    @media screen and (max-width:1100px)
      padding: 30px 0
      .proyecto-img
        img
          width: 95% !important
    @media screen and (max-width:950px)
      grid-template-columns: 1fr
      grid-gap: 10px
      .proyecto-img
        img
          width: 90% !important
          margin: 10px 0 
    border-radius: 5px
    box-shadow: 0 0 2px 2px #DCDCDC
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
          transform: translateY(-10px) scale(1.05)
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

