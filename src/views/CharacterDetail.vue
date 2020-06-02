<template>
  <article>
    <div class="character-detail">
      <span class="ribbon">{{ character.type }}</span>
      <img :src="character.image" :alt="character.name" loading="lazy" />
      <h1 class="title">{{ character.name }}</h1>
      <h2>{{ character.gameSeries }}</h2>
    </div>
  </article>
</template>

<script>
import CharacterService from "@/services/CharacterService.js"
export default {
  // id from router param to get dynamic routing
  // here we receive $route.params as props
  props: ["id"],
  data() {
    return {
      character: {}
    }
  },
  created() {
    CharacterService.getCharacter(this.id)
      .then(response => {
        this.character = response.data.amiibo
        // console.log(response.data.amiibo)
      })
      .catch(error => {
        console.log("There was an error: " + error.response)
      })
  }
}
</script>

<style scoped>
img {
  width: 50%;
  margin-bottom: 1rem;
}
.character-detail {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  position: relative;
}
.character-detail > .title {
  margin: 0;
}

.ribbon {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #39b982;
  padding: 0.5rem;
  color: #fff;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}
</style>
