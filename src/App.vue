<template>
  <div id="app">
  <Navbar/>
  <Hero/>
  <br>
  <div class="container">
    <router-view/>
  </div>
  <br>
  <Footer/>
  </div>
</template>
<style>
</style>

<script>
import Footer from './components/Footer.vue'
import Hero from './components/Hero.vue'
import Navbar from './components/Navbar.vue'

export default {
  components: { Hero, Footer, Navbar },
  name: 'App'
}
</script>


