<template>
  <section class="hero bg-primary py-6">
    <div class="container">
      <div class="row flex-column-reverse justify-content-between flex-lg-row align-items-center">
        <div class="col-lg-6  col-md-8">
          <div class="inner mt-4  ">
            <span class="text-muted text-center text-lg-left d-block ls-1 font-weight-bold">Hey!</span>
            <h1 class="display-4  text-center text-lg-left text-capitalize font-weight-bold" v-html="settings.hero_title" />
            <p class="lead text-center text-lg-left mb-0" v-html="settings.hero_subtitle" />
            <div class="btn-group mt-4 ">
                <g-link class="btn btn-danger px-4 mr-3" to="/contact"
                  >Say Hello </g-link
                >
                <g-link to="/about" class="btn btn-light">More
                  <span class="sr-only">Know more about Pulkit Singh</span>
                </g-link>
            </div>
            <SocialLink />
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mx-auto d-flex mb-4 mr-lg-0 mb-lg-0 align-items-center">
          <picture class="d-flex bg-secondary rounded-circle ml-md-auto ml-lg-auto mr-lg-0 ml-auto mr-auto">
            <g-image width="340" class="img-fluid" fit="cover" quality="35" alt="Pulkit" src="~/assets/img/pulkit (1).png" />
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
