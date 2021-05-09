<template>
    <div>
        <div>
            <section>
                <b-field label="Email"
                    :label-position="labelPosition"
                    >
                    <b-input type="email" placeholder="Your Email">
                    </b-input>
                </b-field>
                <b-field label="Message"
                    :label-position="labelPosition">
                    <b-input maxlength="200" type="textarea"></b-input>
                </b-field>
                <b-field>
                    <input class="button" type="submit" value="Submit">
                </b-field>
            </section>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      labelPosition: 'in-border'
    }
  }
}
</script>

<script>
export default {
  name: 'Simpleform'
}
</script>

<style scoped>
</style>
