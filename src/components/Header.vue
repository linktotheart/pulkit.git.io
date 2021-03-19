<template>
  <header class="sticky-top " >

    <nav class="navbar  navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="/">
        <h3 class="mb-0 text-white" v-html="settings.header_title" />
      </a>
     
      <div class="navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <g-link to="/work" class="nav-link">Work</g-link>
          </li>
          <li class="nav-item">
            <g-link to="/journal" class="nav-link">Journal</g-link>
          </li>
          <li class="nav-item">
            <g-link to="/about" class="nav-link">About</g-link>
          </li>
          
        </ul>
       
      </div>
    </nav>
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

