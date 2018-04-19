<template lang="pug">
  section
    .index-container
      .index.center
        myHeader
        h1.title Luis Ángel Vásquez Nepomuceno
        h2.subtitle Desarrollador Front end
        a(href="#proyectos", @click="down($event)")
          img(src="~/assets/down.png")
    .stack(ref="stack")
      myStack
    #proyectos(ref="proyectos")
      myProyectos
      
</template>

<script>
import myHeader from '~/components/header.vue'
import myStack from '~/components/stack.vue'
import myProyectos from '~/components/proyectos.vue'
export default {
  components: { myHeader, myStack, myProyectos},
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
  background-image: url('~/assets/portada.png');
  height: 100vh;
  position: relative;
  background-repeat: no-repeat;
  transition: all 1s;
  background-size: cover;
  animation: move 15s infinite linear alternate;
  @keyframes move {
    0% {
      background-position: -10px;
    }
    50% {
    }
    100% {
      background-position: 10px;
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
