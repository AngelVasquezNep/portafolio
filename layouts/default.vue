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
  font-size: 16px;
  color: #373737
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

.btn {
  text-decoration: none;
  padding: 5px 20px;
  border: 1px solid #1f1f1f;
  border-radius: 5px;
  margin: 5px;
  transition: all .1s;
  outline: none;
  background-color: #fff;
  &:hover {
    color: #fff;;
    background-color: #42E0C3;
    cursor: pointer;
  }
  &:active {
    transform: scale(.95);
  }
}


</style>
