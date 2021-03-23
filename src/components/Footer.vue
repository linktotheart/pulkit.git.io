<template>
  <footer class="main-footer pb-0 bg-dark">
    <div class="container">
      <div class="row">

      </div>
      <div class="border-top py-3   ">
        <p class="small mb-0 text-muted text-center">
          Copyright {{year}}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json"),
      year: null
    };
  },
  computed() {
    year = Date.getYear;
  },
  components: {
    name: "Footer",
  },
};
</script>

<style>
</style>