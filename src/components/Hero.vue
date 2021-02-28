<template>
  <section class="hero">
    <div class="container">
      <div class="inner">
        <i class="nes-octocat animate is-large mb-3"></i>
        <h1 class="hero-title" v-html="settings.hero_title" />
        <p class="sub-title nes-text" v-html="settings.hero_subtitle" />
        <div class="btn-group mt-3">
          <g-link class="nes-btn is-primary mr-3" to="/contact">Say Hi</g-link>
          <g-link to="/about" class="nes-btn">Learn More</g-link>
        </div>
        <div class="social mt-3">
          <a href="#"> <i class="nes-icon facebook"></i> </a>
          <a href="#"> <i class="nes-icon github"></i> </a>
          <a href="#"> <i class="nes-icon twitter"></i> </a>
          <a href="#"> <i class="nes-icon linkedin"></i> </a>
          <a href="#"> <i class="nes-icon instagram"></i> </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json"),
    };
  },
};
</script>
