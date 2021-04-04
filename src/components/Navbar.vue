<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <h1>YO</h1>
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item tag="router-link" :to="{ name: 'home'}">
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ name: 'projects'}">
                Projects
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ name: 'contacts'}">
                Contact
            </b-navbar-item>
        </template>
    </b-navbar>
</template>
<script>
export default {
  name: 'Navbar'
}
</script>
<style scoped>
</style>
