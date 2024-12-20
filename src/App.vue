<template>
  <BabylonExamples/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BabylonExamples from './components/BabylonExamples.vue';

export default defineComponent({
  name: 'App',
  components: {
    BabylonExamples
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #cecece;
  background-color: rgb(49, 49, 49);
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
}
</style>
