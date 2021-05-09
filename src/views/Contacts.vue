<template>
  <div>
    <div>
      <div class="notification is-primary">Contacts
        <p> Hello Contacts!
          </p>
      </div>
      <div class="columns is-mobile is-centered">
        <a class="column is-4">
          <simpleform/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

import Simpleform from '@/components/Simpleform.vue'
export default {
  name: 'Contacts',
  components: { Simpleform }
}
</script>
