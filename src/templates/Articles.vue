<template>
  <Layout>
    <div class="article">
      <div class="container article-container">
        <div class="article-header">
          <h1 v-html="$page.post.title" class="article-title" />
          <div class="article-meta">
            <div class="article-author">
              <span class="label">Author</span>
              <span class="author-name" v-text="$page.post.author" />
            </div>
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
    author
    date (format: "D. MMMM YYYY")
    timeToRead
    content
    path
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
.article-container {
  max-width: 840px;
}
.article-header {
  padding: 2rem 0 4rem 0;
}
.article-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.article-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.article-meta > div {
  margin-right: 4rem;
}
.article-meta > div:last-of-type {
  margin: 0;
}
</style>