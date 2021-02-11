<template>
  <footer class="main-footer">
    <div class="container">
      <div class="nes-container is-dark with-title">
        <p class="title">Container.is-dark</p>
        <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
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
};
</script>

<style>
</style>