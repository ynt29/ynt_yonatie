<template>
  <div
      ref="fadeContainer"
      class="fade-container"
      data-aos="fade-up" 
      data-aos-duration="1000"
      data-aos-easing="ease-in-circ"
    >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const fadeContainer = ref();

</script>

<style scoped lang="scss">



</style>