<template>
  <section class="hero bg-primary py-6">
    <div class="container">
      <div class="row">
        <div class="col-xl-8">
          <div class="inner mt-4  ">
            <h1 class="display-4  text-capitalize font-weight-bold" v-html="settings.hero_title" />
            <p class="lead mb-0" v-html="settings.hero_subtitle" />
            <div class="btn-group mt-3">
                <g-link class="btn btn-warning px-4 mr-3" to="/contact"
                  >Say Hi</g-link
                >
                <g-link to="/about" class="btn btn-outline-primary">Learn More</g-link>
            </div>
            <SocialLink />
          </div>
        </div>
        <div class="col-xl-4 d-flex align-items-center">
          <picture class="d-flex bg-secondary rounded-circle ml-md-auto">
            <g-image width="300" class="m-n4" src="~/assets/img/pulkit (1).png" />
          </picture>
        </div>
      </div>          
    </div>
  </section>
</template>

<script>
import SocialLink from "./SocialLink";

export default {
  data() {
    return {
      settings: require("../../data/theme.json"),
    };
  },
  components: {
    SocialLink,
  }
};
</script>
