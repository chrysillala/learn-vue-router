<template>
  <div>
    <h1>Super Smash Bros Amiibo List</h1>
    <MediaBox v-if="loading">
      <h4 slot="heading">Loading...</h4>
      <p slot="paragraph">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, magni.
      </p>
    </MediaBox>
    <div v-else>
      <input
        type="text"
        class="search-box"
        placeholder="search character"
        v-model="query"
      />
      <div class="card-wrapper">
        <CharacterCard
          v-for="(character, index) in searchCharacter"
          :key="index"
          :character="character"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CharacterService from "@/services/CharacterService.js"
import CharacterCard from "@/components/CharacterCard.vue"
import MediaBox from "@/components/MediaBox.vue"

export default {
  components: {
    CharacterCard,
    MediaBox
  },
  data() {
    return {
      characters: [],
      loading: true,
      query: ""
    }
  },
  created() {
    CharacterService.getCharacters()
      .then(response => {
        // set characters data
        this.characters = response.data.amiibo
        // console.log(this.characters)
      })
      .catch(error => {
        console.log("There was an error: " + error.response)
      })
      .finally(() => (this.loading = false))
  },
  computed: {
    searchCharacter() {
      return this.characters.filter(character =>
        character.name.toLowerCase().includes(this.query.toLowerCase())
      )
    }
  }
}
</script>

<style>
.card-wrapper {
  display: grid;
  /* grid-template-columns: repeat(8, minmax(0, 1fr)); */
  gap: 1rem;
}

.search-box {
  margin-bottom: 1.5rem;
}
</style>
