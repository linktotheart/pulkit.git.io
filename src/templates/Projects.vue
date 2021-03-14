<template>
  <Layout>
    <div class="project">
      <div class="container">
        <div class="container container-sm">
          <div class="article-header">
            <h1 class="article-title title" v-html="$page.post.title" />
            <p class="lead">{{ $page.post.excerpt }}</p>
          </div>
        </div>

        <div class="thumbnail">
          <g-image :alt="$page.post.title" :src="$page.post.thumbnail.src" />
        </div>

        <div class="article-meta">
          <div class="categories">
            <span class="label nes-text is-primary">
              <i class="nes-icon cloud"></i>
            </span>
            <span
              class="category muted"
              v-for="(category, index) in $page.post.categories"
              :key="index"
            >
              {{ category }}
            </span>
          </div>

          <div class="date d-flex">
            <span class="label muted mr-2">
              <i class="calendar nes-icon"></i
            ></span>
            <span class="muted" v-html="$page.post.date" />
          </div>
        </div>

        <div class="container container-sm">
          <article
            v-html="$page.post.content"
            class="article-content project-inner mb-5 mt-5"
          />

          <g-link to="/work" class="nes-balloon from-left nes-pointer">
            Liked? it <i class="nes-icon like mb-0"></i> <br />
            See More
          </g-link>
        </div>
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