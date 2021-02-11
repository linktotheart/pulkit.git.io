<template>
  <div class="container">
    <div class="projects">
      <div class="project" v-for="item in projects" :key="item.node.id">
        <div class="nes-container is-rou nded with-title">
          <g-link class="project-link" :to="item.node.path">
            <g-image
              class="thumb"
              :src="item.node.thumbnail"
              :alt="item.node.title"
            />

            <h3 class="project-title title">{{ item.node.title }}</h3>
            <div class="categories">
              <span
                class="category"
                v-for="(item, index) in item.node.categories"
                :key="index"
                >{{ item }}</span
              >
            </div>
          </g-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>