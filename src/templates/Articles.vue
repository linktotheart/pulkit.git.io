<template>
  <Layout>
    <div class="article">
      <div class="container article-container">
        <div class="thumbnail">
          <g-image :Src="$page.post.thumbnail.src" :alt="$page.post.title" />
        </div>
        <div class="article-header">
          <h1 v-html="$page.post.title" class="article-title" />
          <div class="article-meta">
            <div class="article-date">
              <span class="label">Date</span>
              <div v-text="$page.post.date" />
            </div>
            <div class="article-time">
              <span class="label">Time</span>
              <span>{{ $page.post.timeToRead }} min read</span>
            </div>
          </div>
        </div>

        <ArticleContent :content="$page.post.content" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query articles ($path: String!) {
  post: articles (path: $path) {
    title
    date (format: "DD, MMMM YY")
    timeToRead
    content
    path
    thumbnail
  }
}
</page-query>

<script>
import ArticleContent from "@/components/ArticleContent";
export default {
  components: {
    ArticleContent,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<style scoped>
</style>