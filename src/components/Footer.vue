<template>
  <footer class="main-footer pb-0 bg-light">
    <div class="container">
      <div class="row footer-top text-center">
        <div class="col-xl-8 col-lg-6 mx-auto col-md-9">
          <div class="footer-cta pb-5 pt-4">
            <h2 class="font-weight-bolder mb-4 text-dark">
            Get In Touch 👋
          </h2>
          <p class="lead text-dark">
            Feel free to email me about anything. Want some advice? Give some feedback?

            <br>

            Your can also reach me around the web.
             <SocialLink mt="mt-3" />
          </p>

         


            <g-link to="/contact" class="btn px-4 btn-outline-dark">Say Hello</g-link>
          </div>
        </div>
      </div>

      <div class="border-top  py-4   ">
        <p style="letter-spacing: 1px" class=" mb-0 small text-muted text-center ">
          Copyright 2021 | Coded by Pulkit Singh with ❤️ and Vue.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import SocialLink from './SocialLink';

export default {
  data() {
    return {
      settings: require("../../data/theme.json"),
      year: null,
      date: null
    };
  },
  components: {
    SocialLink,
  },
};
</script>

<style>
</style>