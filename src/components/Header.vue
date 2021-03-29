<template>
  <header class="sticky-top " >

    <nav 
    class="navbar px-md-4 px-lg-5  navbar-expand-lg navbar-dark bg-primary"
    :class="{ 'bg-danger text-white' : ($route.path == '/journal'),
     'bg-success text-success' : ($route.path == '/work')} ">
      <a class="font-weight-bold text-capitalize navbar-brand" href="/">
        <h3 class="mb-0 text-white" v-html="settings.header_title" />
      </a>
     
      <div class="navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mr-md-4">
            <g-link to="/work" class="nav-link ">Work</g-link>
          </li>
          <li class="nav-item mr-md-3">
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

