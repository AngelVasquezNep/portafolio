<template lang="pug">
  .container-nuxt
    nuxt.nuxt
</template>

<script>
  export default {
    name: 'default'
  }
</script>

<style lang="scss" >
/* Paleta #3b8070  #35495e  #35495e  #35495e #FF003C*/

$text-color: #35495e;

body {
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
  // min-height: 100vh;
  // overflow: hidden;
  font-size: 12px;
}

.center {
  height: 100%;
  display: grid;
  // justify-content: center;
  align-items: center;
  text-align: center;
}

.container-nuxt {
  min-height: 100vh;
  overflow: hidden;
  text-align: center;
  display: grid;
  grid-template-rows: auto 1fr;
}


</style>
