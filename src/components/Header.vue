<template>
  <header class="main-header">
    <div class="container">
      <a href="/" class="logo d-flex">
        <h3 v-html="settings.header_title" />
      </a>
      <nav class="nav" :class="{ show: showNav }">
        <g-link to="/work" class="nav-link">Work</g-link>
        <g-link to="/journal" class="nav-link">Journal</g-link>
        <g-link to="/about" class="nav-link">About</g-link>
      </nav>
      <span class="nav-toggler" @click="navToggle">
        <i class="nes-icon" :class="[showNav ? 'bars' : 'times']"></i>
      </span>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json"),
      showNav: false,
    };
  },
  methods: {
    navToggle() {
      this.showNav = !this.showNav;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>