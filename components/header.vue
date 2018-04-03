<template lang="pug">
  .header.center
    .header-container.center
      p Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos pariatur cupiditate labore esse sunt, enim aspernatur facere deserunt voluptate architecto inventore nulla officiis ex cumque, quibusdam consequuntur laudantium repudiandae dicta!
</template>

<script>

  export default {
    name: 'my-header'
  }
</script>

<style lang="sass" scoped>

.header
  background-color: #42E0C3
  color: #fff
  position: relative
  height: 100vh
  .header-container
    
    position: fixed
    width: 300px
    top: 0
    left: 0
    bottom: 0
    right: 0
    background-color: rgba(1, 1, 1, .5)
</style>
