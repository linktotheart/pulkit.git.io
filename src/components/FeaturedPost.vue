<template>
  <div class="projects pt-0 mt-6">
    <div class="container">
      <h2 class="section-title h1 mb-4 font-weight-bold">Selected Works 🔥 </h2>

      <div class="row row-cols-1  row-cols-lg-3 row-cols-md-2 mx-0">

        <g-link class="card d-flex card-overlay mb-0 text-center text-dark" :to="item.node.path" v-for="item in projects" :key="item.node.id">
              <span class="card-img">
                <g-image
                  width="250"
                  quality="45"
                  blur="15"
                  class="thumb img-fluid"
                  :src="item.node.thumbnail"
                  :alt="item.node.title"
                />
                <span class="background-color " style="background-color: rgba(14, 14, 14, .3);"></span>
              </span>

              <span class="card-img-overlay">
                <h4 class="card-title h4">{{ item.node.title }}</h4>
                <span class="card-category subtitle"> {{ item.node.categories[0] }}</span>
              </span>
        </g-link>
      </div>
       <div class="d-flex">
          <div class="mx-auto text-center col-lg-6 mt-4">
              <g-link to="/projects" class="btn px-4 btn-light "> 
                View All 
              </g-link>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offX: null,
      offY: null,
    };
  },
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  methods: {
  },
};
</script>


