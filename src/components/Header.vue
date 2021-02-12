<template>
  <header class="main-header">
    <div class="container">
      <a href="./" class="logo d-flex">
        <h3>Pulkit</h3>
      </a>
      <nav class="nav">
        <g-link to="/work" class="nav-link">Work</g-link>
        <g-link to="/journal" class="nav-link">Journal</g-link>
        <g-link to="/about" class="nav-link">About</g-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
</style>