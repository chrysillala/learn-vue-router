<template>
  <!-- here is where we layout the structure of our component -->
  <router-link
    class="character-link"
    :to="{ name: 'character-show', params: { id: characterId } }"
  >
    <div class="character-card -shadow">
      <!-- <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span> -->
      <img
        :src="character.image"
        :alt="character.name"
        class="card-thumbnail"
      />
      <h4 class="title">{{ character.name }}</h4>
      <!-- <BaseIcon name="users">{{ event.attendees.length }} attending</BaseIcon> -->
    </div>
  </router-link>
</template>

<script>
export default {
  // here is where we give our component the ability to behave and perform logic
  props: {
    character: {
      type: Object
    }
  },
  computed: {
    characterId() {
      // unique id = head + tail
      return this.character.head.concat(this.character.tail)
    }
  }
}
</script>

<style scoped>
/* here is where we design the appearance of our component */
/* scoped means the styles only applies to this component */
.card-thumbnail {
  width: 15%;
  margin-right: 1rem;
}
.character-card {
  padding: 20px;
  transition: all 0.2s linear;
  cursor: pointer;
  display: flex;
}
.character-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.character-card > .title {
  margin: 0;
}
.character-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
  grid-column: span 4 / span 4;
}
</style>
