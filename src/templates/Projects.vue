<template>
  <Layout>
    <div class="project">
      <div class="container">
        <div class="row mt-4">
          <div class="col-xl-8 col-lg-9 col-md-11 mx-auto">
          <div class="article-header">
            <h1 class="article-title title" v-html="$page.post.title" />
            <p class="lead font-style-normal">{{ $page.post.excerpt }}</p>
          </div>
          </div>
        </div>

        <div class="thumbnail mx-n2">
          <g-image class="mw-100" fill="contain" :alt="$page.post.title" :src="$page.post.thumbnail.src" />
        </div>

        <div class="article-meta">
          <div class="categories">
            <span
              class="category muted"
              v-for="(category, index) in $page.post.categories"
              :key="index"
            >
              {{ category }}
            </span>
          </div>

          <div class="date d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi mr-2 bi-calendar2-event" viewBox="0 0 16 16">
  <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
</svg>
            <span class="muted" v-html="$page.post.date" />
          </div>
        </div>

        <div class="row">
          <div class=" border-bottom col-xl-8 col-lg-9 col-md-11 mx-auto">
          <article
            v-html="$page.post.content"
            class="article-content project-inner mb-5 mt-5"
          />
          </div>
        </div>

      </div>
    </div>
  </Layout>
</template>

<page-query>
query projects ($path: String!) {
  post: projects (path: $path) {
    title
    date (format: "DD, MMM YYYY")
    content
    excerpt
    thumbnail (quality: 75)
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
      description: this.$page.post.excerpt
    };
  },
};
</script>

<style scoped>
.nes-balloon {
  text-decoration: none;
}
</style>