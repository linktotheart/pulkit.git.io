<template>
  <section class="hero bg-primary   ">
    <div class="container">
      <div class="inner">
        <h1 class=" display-4 text-white" v-html="settings.hero_title" />
        <p class="lead text-white" v-html="settings.hero_subtitle" />
        <div class="btn-group mt-3">
          <g-link class="btn btn-warning px-4 mr-3" to="/contact">Say Hi</g-link>
          <g-link to="/about" class="btn btn-secondary">Learn More</g-link>
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
