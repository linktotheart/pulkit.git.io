<template>
  <div class="articles">
    <div class="container">
      <h2 class="-section-title"><i class="nes-icon star"></i> Latest</h2>

      <div class="articles">
        <div class="grid">
          <div class="grid-item-3" v-for="item in articles" :key="item.node.id">
            <div class="article">
              <g-link :to="item.node.path" class="block">
                <div class="thumb">
                  <g-image class="thumbnail" :src="item.node.thumbnail.src" />
                </div>
                <h4 class="article-title">{{ item.node.title }}</h4>
                <div class="date">
                  <span class="is-primary">{{ item.node.date }}</span>
                  <span class="is-muted"
                    >{{ item.node.timeToRead }} Min(s)
                  </span>
                </div>
                <p>
                  {{ `${item.node.excerpt.slice(0, 120)}...` }}
                  <br />
                </p>
                <span class="nes-text link is-primary">Read More --> </span>
              </g-link>
            </div>
          </div>
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