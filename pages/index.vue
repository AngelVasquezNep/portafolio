<template lang="pug">
  section
    .index-container
      .index.center
        myHeader
        h1.title Luis Ángel Vásquez Nepomuceno
        p.subtitle Desarrollador Front end
        a(href="#proyectos", @click="down($event)")
          img(src="~/assets/down.png")
    #proyectos(ref="proyectos")
      h1 más contenido
      h1 más contenido
      h1 más contenido
      h1 más contenido
      h1 más contenido
      h1 más contenido
      h1 más contenido
      h1 más contenido
      h1 más contenido
      h1 más contenido
      h1 más contenido
      h1 más contenido
      h1 más contenido
      h1 más contenido
      h1 más contenido
      h1 más contenido
      h1 más contenido
      h1 más contenido
      h1 más contenido
</template>

<script>
import myHeader from '~/components/header.vue'
export default {
  components: {myHeader},
  methods: {
    down (evt) {
    evt.preventDefault()
      this.$refs.proyectos.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.index-container {
  background-image: url('~/assets/portada.svg');
  height: 100vh;
  background-size: cover;
  position: relative;
  animation: apper 1s;
  @keyframes apper {
    0% { opacity: .8; }
    100% { opacity: 1; }
  }
}

.index {
  position: relative;
  background: rgba(1, 22, 39, 0.95);
}

.title {
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  color: #fff;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #CFDBD5;
  word-spacing: 5px;
  padding-bottom: 15px;
}

a {
  display: grid;
  justify-content: center;
  align-content: center;
  left: calc(50%-50px);
  position: absolute;
  bottom: 0;
  align-self: center;
  margin: 0 auto;
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 100px 100px 0 0 ;
  background-color: rgba(0,0,0,.3);
  transition: all .5s;
  
  &:hover {
    animation-play-state: paused;
    background-color: rgba(0,0,0,.6);
    img {
      filter: opacity(100%);
    }
  }

  img {
    transition: all .5s;
    filter: opacity(70%);
  }

  animation: tintinear 2s infinite;
  @keyframes tintinear {
    50% {
      opacity: .6;
    }
  }

  }

</style>
