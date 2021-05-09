<template>
    <div id="navbar">
        <b-navbar>
            <template #brand>
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <h1>THANH Icon</h1>
                </b-navbar-item>
            </template>
            <template #start>
                <b-navbar-item tag="router-link" :to="{ name: 'home'}">
                    Home
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ name: 'projects'}">
                    Projects
                </b-navbar-item>
            </template>
            <template #end>
                <b-navbar-item class="button" tag="router-link" :to="{ name: 'contacts'}">
                    Contact Me
                </b-navbar-item>
            </template>
        </b-navbar>
    </div>
</template>

<style scoped>
#navbar {
    overflow: hidden;
}

/* Navbar links */
#navbar a {
    float: left;
    display: block;
    text-align: center;
    padding: 14px;
    text-decoration: none;
}

/* Page content */
.content {
    padding: 16px;
}

/* The sticky class is added to the navbar with JS when it reaches its scroll position */
.sticky {
    position: fixed;
    top: 0;
    width: 100%;
}

/* Add some top padding to the page content to prevent sudden quick movement (as the navigation bar gets a new position at the top of the page (position:fixed and top:0) */
.sticky + .content {
    padding-top: 60px;
}
</style>

<script>
window.onscroll = function () { myFunction() }
var navbar = document.getElementById('navbar')
var sticky = navbar.offsetTop
function myFunction () {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky')
  }
}
</script>

<script>
export default {
    name: 'Navbar'
}
</script>
