<template>
  <div class="articles">
    <div class="container">
      <h2 class="-section-title"><i class="nes-icon star"></i> Latest</h2>

      <div class="articles-inner">
        <div class="article" v-for="item in articles" :key="item.node.id">
          <g-link :to="item.node.path" class="block">
            <div class="thumb">
              <g-image class="thumbnail" :src="item.node.thumbnail.src" />
            </div>
            <h4 class="article-title">{{ item.node.title }}</h4>
            <span class="nes-badge primary">
              <span class="is-primary">{{ item.node.category }}</span>
            </span>
          </g-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>