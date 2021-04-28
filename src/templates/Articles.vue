<template>
  <Layout>
    <div class="article">
      <div class="container article-container">
        <div class="container container-sm">
          <div class="article-header">
            <h1 v-html="$page.post.title" class="article-title" />
            <p class="lead">
              {{ $page.post.title }}
            </p>
          </div>
        </div>

        <div class="thumbnail">
          <g-image :src="$page.post.thumbnail.src" :alt="$page.post.title" />
        </div>
        <div class="article-meta">
          <div class="article-date">
            <span class="label">Posted &nbsp; </span>
            <span v-text="$page.post.date" />
          </div>

          <div class="article-time">
            <span>{{ $page.post.timeToRead }} min read</span>
          </div>
        </div>

        <!---  content start -->
        <div class="container container-sm">
          <ArticleContent :content="$page.post.content" />

          <div class="conclusion">
            <div class="alert alert-primary">
              <p><strong>Conclusion</strong></p>
              <p class="mb-0 em font-style-italic">{{ $page.post.conclusion }}</p>
            </div>
          </div>
          <div class="category pt-4 border-top">
            <g-link
              
              class="btn btn-sm btn- bg-light"
              :key="cat.id"
              v-for="cat in $page.post.categories"
              :to="cat.path"
            >
                {{ cat.title }}
            </g-link>
          </div>
        </div>
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
    categories
    {
      id
      title
      path
    }
    path
    conclusion
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
      content: this.$page.post.title,
    };
  },
};
</script>