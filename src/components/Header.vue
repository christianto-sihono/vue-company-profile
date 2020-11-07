<template>
  <!-- ======= Header ======= -->
  <div id="header">
    <div class="fixed-top header-scrolled">
      <div class="container">

        <div class="logo float-left">
          <h1 class="text-light"><a href="index.html"><span>M3</span></a></h1>
          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
        </div>

        <nav class="nav-menu float-right d-none d-lg-block">
          <ul>
            <!-- <li class="active"><a href="#">Home</a></li> -->
            <li :class="{active:isActiveH}"><router-link to="/">Home</router-link></li>
            <li :class="{active:isActiveA}"><router-link to="/about">About Us</router-link></li>
            <li :class="{active:isActiveS}"><router-link to="/services">Services</router-link></li>
            <li :class="{active:isActiveP}"><router-link to="/portfolio">Portfolio</router-link></li>
            <li :class="{active:isActiveT}"><router-link to="/team">Team</router-link></li>
            <li :class="{active:isActiveB}"><router-link to="/blog">Blog</router-link></li>
            <li :class="{active:isActiveC}"><router-link to="/contact">Contact Us</router-link></li>
            <!-- <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="team.html">Team</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="contact.html">Contact Us</a></li> -->
          </ul>
        </nav><!-- .nav-menu -->

      </div>
    </div>
  </div><!-- End Header -->
</template>

<script>
export default {
  data () {
    return {
      isActiveH: false,
      isActiveS: false,
      isActiveP: false,
      isActiveT: false,
      isActiveB: false,
      isActiveC: false
    }
  }
}
</script>

<style>

</style>
