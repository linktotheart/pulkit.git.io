<template>
  <div class="projects">
    <div class="container">
      <h2 class="-section-title"><i class="nes-icon heart"></i> Works</h2>
      <div class="projects-inner">
        <div class="project mb-3" v-for="item in projects" :key="item.node.id">
          <g-link class="project-link" :to="item.node.path">
            <div class="thumbnail">
              <g-image
                class="thumb"
                :src="item.node.thumbnail"
                :alt="item.node.title"
              />
            </div>
            <h4 class="project-title title">{{ item.node.title }}</h4>
          </g-link>
        </div>
      </div>

      <!-- <section class="nes-container">
        <section class="message-list">
          <section class="message -left">
            <i class="nes-bcrikko"></i>
            <div class="nes-balloon from-left">
              <p>Hello NES.css</p>
            </div>
          </section>

          <section class="message -right">
            <div class="nes-balloon from-right">
              <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
            </div>
            <i class="nes-bcrikko"></i>
          </section>
        </section>
      </section> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
};
</script>


