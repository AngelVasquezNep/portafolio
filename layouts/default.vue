<template lang="pug">
  .container-nuxt
    my-header.my-header
    nuxt.nuxt
</template>

<script>
  import myHeader from '~/components/header.vue'
  import myFooter from '~/components/footer.vue'
  export default {
    name: 'default',
    components: { myHeader, myFooter }
  }
</script>

<style lang="scss" >
/* Paleta #3b8070  #3b8070  #3b8070  #35495e  #35495e  #35495e #FF003C*/

body {
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
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
  text-align: center;
  display: grid;
  grid-template-columns: 300px 1fr;
}


</style>
