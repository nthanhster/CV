<template>
  <div>
    <div>
      <div class="columns">
        <div class="column" v-for="project in projects" :key="project.name">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                {{project.name}}
              </p>
            </header>
          </div>
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="project.img ? require('../assets/'+project.img) : null" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      projects: 'getProjects'
    })
  }
}

</script>
