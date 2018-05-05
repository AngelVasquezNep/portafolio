<template lang="pug">
  .skills
    h2.subtitle Skills
    .hard
      h2 Hard Skills
      div(v-for="skill in skills")
        .box
          p {{ skill.name }}
          .progress
            .progress-bar(:style="{width:skill.porcentaje + '%'}")
    .soft
      h2 Soft Skills
      

</template>

<script>
export default {
  name: 'skills',
  data () {
    return {
      skills: [
        { name: "HTML5", porcentaje: 90 },
        { name: "CSS3 - Animaciones", porcentaje: 85 },
        { name: "JS - EcmaScript6", porcentaje: 85 },
        { name: "Vue", porcentaje: 95 },
        { name: "React", porcentaje: 80 },
        { name: "Git - GitHub", porcentaje: 80 },
        { name: "Babel", porcentaje: 75 },
        { name: "Sass", porcentaje: 80 },
        { name: "Pug", porcentaje: 60 },
        { name: "Java", porcentaje: 30 },
        { name: "Python", porcentaje: 20 }
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
.skills {
  color: #2C2C2C;
  font-family: 'Lato', sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr
}

.subtitle {
  font-size: 2.5em;
  grid-column: 1 / -1;
  grid-gap: 10px;
}

.box {
  padding: 10px;
  margin: 1px 10px;
  text-align: left;
  box-shadow: inset 40% 0 0px 0px red;

  p {
    margin: 2px;
  }
}

.progress {
  padding: 3px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
}

.progress-bar {
  height: 20px;
  border-radius: 4px;
  background-image: linear-gradient(100deg, #fe4c40, #bf9bde, #009dc4  );
  transition: 0.4s linear;
  transition-property: width, background-color;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25), inset 0 1px rgba(255, 255, 255, 0.1);
}




</style>
