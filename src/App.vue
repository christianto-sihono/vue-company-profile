<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Header />
    <router-view/>
    <Footer />
    <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/Header.vue' // @ is an alias to /src
import Footer from '@/components/Footer.vue'

// import '@/assets/vendor/jquery/jquery.min.js'
// import '@/assets/vendor/jquery.easing/jquery.easing.min.js'
// import '@/assets/vendor/php-email-form/validate.js'
// import '@/assets/vendor/venobox/venobox.min.js'
// import '@/assets/vendor/waypoints/jquery.waypoints.min.js'
// import '@/assets/vendor/counterup/counterup.min.js'
// import '@/assets/vendor/owl.carousel/owl.carousel.min.js'
// import '@/assets/vendor/isotope-layout/isotope.pkgd.min.js'
// import '@/assets/vendor/aos/aos.js'
// import '@/assets/js/main.js'

@Component({
  components: {
    Header,
    Footer
  }
})
export default class Class extends Vue {}
</script>

<style lang="scss">

</style>
