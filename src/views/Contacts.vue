<template>
  <div>
    <div>
      <div class="notification is-primary">Contacts
        <p> Hello Contacts!
          </p>
      </div>
      <div class="column is-4">
        <a class="column is-hcentered">
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
