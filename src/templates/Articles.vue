<template>
  <Layout>
    <div class="article ">
      <div class="container article-container">
        <div class="row">
          <div class="col-xl-8 col-lg-9 col-md-11 mx-auto">
            <div class="article-header">
                <div class="article-date h6 text-muted ls-1 ">
                  <span class="label">Posted &nbsp; </span>
                  <span v-text="$page.post.date" />
                </div>
              <h1 v-html="$page.post.title" class="article-title" />
              <p class="lead text-muted">
                {{ $page.post.excerpt }}
              </p>
            </div>
          </div>
        </div>

        <div class="thumbnail mb-5">
          <g-image :src="$page.post.thumbnail.src" :alt="$page.post.title" />
        </div>

     
        <!---  content start -->
        <div class="row">
          <div class="col-xl-8 bg-white py-4 col-lg-9 col-md-11 mx-auto">
            <ArticleContent :content="$page.post.content" />

            
            <div class="category pt-4 border-top">
              <g-link
                class="btn btn-sm btn- bg-light"
                :key="cat.id"
                v-for="cat in $page.post.categories"
                :to="cat.path"
              >
                #{{ cat.title }}
              </g-link>
            </div>
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
    excerpt
    categories
    {
      id
      title
      path
    }
    path
    thumbnail (width: 1200, quality: 80)
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