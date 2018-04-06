<template lang="pug">
  section.center.index
    app-logo
    Animation
    h1.title Luis Ángel Vásquez Nepomuceno
    p.subtitle Proyectos
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Animation from '~/components/Animation.vue'

export default {
  components: {
    AppLogo,
    Animation
  }
}
</script>

<style lang="scss" scoped>

.index {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  position: relative;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}


</style>
