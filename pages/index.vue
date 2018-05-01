<template lang="pug">
  section
    .index-container
      .index.center

        myHeader

        h1.title Luis Ángel Vásquez Nepomuceno
        h2.subtitle Desarrollador Front end
        a.down(href="#", @click="down($event)")
          img(src="~/assets/down.png")
    .stack(ref="stack")
      myStack
    #proyectos(ref="proyectos")
      myProyectos
    #about
      myAbout
    #contacto
      myContacto
      
</template>

<script>
import myHeader from '~/components/header.vue'
import myStack from '~/components/stack.vue'
import myProyectos from '~/components/proyectos.vue'
import myAbout from '~/components/about.vue'
import myContacto from '~/components/contacto.vue'
export default {
  components: { myHeader, myStack, myProyectos, myAbout, myContacto },
  methods: {
    down (evt) {
    evt.preventDefault()
      this.$refs.stack.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.index-container {
  background-image: url('~/assets/space-1.png');
  height: 100vh;
  position: relative;
  background-repeat: no-repeat;
  transition: all 1s;
  background-size: cover;
  animation: move 10s infinite linear alternate;
  @keyframes move {
    0% {
      background-position: 0px -100px;
      background-size: 140%;
    }
    50% {
      background-size: 160%;
      background-position: -10px 0px;
    }
    100% {
      background-size: 140%;
      background-position: -100px -100px;
    }
  }
}

.index {
  position: relative;
  background: rgba(1, 22, 39, 0.95);
  animation: apper 1s;
  @keyframes apper {
    0% { opacity: .8; }
    100% { opacity: 1; }
  }
  @media screen and (max-width:600px) {
    .title {
      font-size: 35px;
    }
    .subtitle {
      font-size: 30px;
    }
  }

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

.down {
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
  background-color: rgba(0,0,0,.9);
  transition: all .5s;
  
  &:hover,
  &:focus {
    animation-play-state: paused;
    background-color: rgba(0,0,0,.9);
    opacity: 1 !important;
    img {
      filter: opacity(100%);
    }
  }

  img {
    transition: all .5s;
    filter: opacity(50%);
  }

  animation: tintinear 3s infinite;
  @keyframes tintinear {
    50% {
      background-color: rgba(0,0,0,.3);
      // opacity: .1;
    }
    
  }

  }

</style>
