<template lang="pug">
  .contacto
    p.copy © Copyright 2018 Ángel Vásquez
    span
      a(href="https://github.com/angelvasqueznep", target="_blank")
        img(src="~/assets/github.png", alt="github")
    span
      a(href="https://twitter.com/angelvasqueznep", target="_blank")
        img(src="~/assets/twitter.png", alt="twitter")
    span
      a(href="https://www.linkedin.com/in/ángel-vásquez-nepomuceno/", target="_blank")
        img(src="~/assets/linkedin.png", alt="linkedin")
    span
      a(href="mailto:angel.vasquez.unam@gmail.com", target="_blank")
        img(src="~/assets/mail.png", alt="mail")
</template>

<style lang="sass" scoped>
.contacto
  margin: 20px 0
  display: grid
  align-items: center
  grid-auto-flow: column
  @media screen and (max-width: 768px)
    grid-auto-flow: row
    grid-template-columns: repeat(4, 1fr)
    grid-gap: 10px 0
    .copy
      grid-column: 1 / -1
    
</style>
