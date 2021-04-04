<template>
  <div id="app">
  <navbar/>
  <hero/>
  <div class="container">
    <router-view/>
  </div>
  </div>
</template>
<style>
</style>

<script>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'

export default {
  components: { Navbar, Hero },
  name: 'App'
}
</script>
