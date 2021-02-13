<template>
  <Layout>
    <div class="project">
      <div class="container">
        <div class="thumbnail">
          <g-image :alt="$page.post.title" :src="$page.post.thumbnail.src" />
        </div>
        <div class="page-header">
          <h1 class="project-title title" v-html="$page.post.title" />
        </div>
        <div class="project-info">
          <div class="info-container d-flex">
            <div class="categories">
              <span class="label nes-text is-primary">Categories</span>
              <span
                class="category muted"
                v-for="(category, index) in $page.post.categories"
                :key="index"
                v-text="category"
              />
            </div>
            <div class="date">
              <span class="label mr-2">Posted</span>
              <span class="muted" v-html="$page.post.date" />
            </div>
          </div>
        </div>

        <div
          v-html="$page.post.content"
          class="content project-inner mb-5 mt-5"
        />

        <g-link to="/work" class="nes-balloon from-left nes-pointer">
          Liked? it <i class="nes-icon like mb-0"></i> <br />

          See More
        </g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query projects ($path: String!) {
  post: projects (path: $path) {
    title
    date (format: "MMM YYYY")
    content
    excerpt
    thumbnail
    categories
    path
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      name: this.$page.post.excerpt,
    };
  },
};
</script>

<style scoped>
.nes-balloon {
  text-decoration: none;
}
</style>