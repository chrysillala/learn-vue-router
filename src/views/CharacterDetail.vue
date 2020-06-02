<template>
  <article>
    <div class="character-detail">
      <!-- <span class="eyebrow">{{ event.time }} on {{ event.date }}</span> -->
      <img :src="character.image" :alt="character.name" loading="lazy">
      <h1 class="title">{{ character.name }}</h1>
      <h2>{{ character.gameSeries }}</h2>
      <!-- <h5>Organized by {{ event.organizer }}</h5> -->
      <!-- <h5>Category: {{ event.category }}</h5> -->
    </div>

    <!-- <div class="location">
      <BaseIcon name="map"><h3 class="title">Location</h3></BaseIcon>
      <address>{{ event.location }}</address>
    </div>

    <h3>Event Details</h3>
    <p>{{ event.description }}</p>

    <h3>
      Attendees
      <span class="badge -fill-gradient">{{
        event.attendees ? event.attendees.length : 0
      }}</span>
    </h3>
    <ul class="list-group">
      <li
        class="list-item"
        v-for="(attendee, index) in event.attendees"
        :key="index"
      >
        {{ attendee.name }}
      </li>
    </ul> -->
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
}
.character-detail {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
}
</style>
