<template>
  <div class="projects">
    <div class="container">
      <h2 class="section-title"><i class="nes-icon heart"></i> Works</h2>

      <div class="grid">
        <div class="grid-item-alt" v-for="item in projects" :key="item.node.id">
          <div
            :style="{ transform: 'translate(' + offX + 'turn)' }"
            class="project mb-3"
            @mouseover="hovering"
          >
            <g-link class="project-link" :to="item.node.path">
              <div class="thumbnail">
                <g-image
                  class="thumb"
                  :src="item.node.thumbnail"
                  :alt="item.node.title"
                />
                <div class="caption">
                  <h5 class="project-title title">{{ item.node.title }}</h5>
                </div>
              </div>
            </g-link>
          </div>
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
    hovering(e) {
      console.log(e.offsetX, e.offsetY);
      this.offX = e.offsetX;
      this.offY = e.offsetY;
    },
  },
};
</script>


