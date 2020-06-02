<template>
  <div class="event-card">
    <BaseIcon name="globe" />
    <slot name="heading"></slot>
    <slot name="paragraph"></slot>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  background-color: lightskyblue;
}
</style>
