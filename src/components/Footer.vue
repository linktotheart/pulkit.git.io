<template>
  <footer class="main-footer">
    <div class="container">
      <div class="nes-container is-dark with-title">
        <p class="title" v-html="settings.footer_title" />
        <div class="cont d-flex">
          <i class="nes-mario is-small animate"></i>
          <h2>
            <a class="nes-text is-primary" href="#">
              pulkitsingh302@gmail.com
            </a>
          </h2>
          <i class="nes-icon coin is-large animate"></i>
        </div>
        <p class="footer-lower mb-0" v-html="settings.footer" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json"),
    };
  },
  components: {
    name: "Footer",
  },
};
</script>

<style>
</style>