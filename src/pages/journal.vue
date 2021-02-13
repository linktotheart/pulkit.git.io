<template>
  <Layout>
    <div class="container">
      <div class="page-header">
        <h1 class="title is-centered">Journals</h1>
      </div>
      <div class="page-body">
        <p class="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis culpa
          adipisci laboriosam corporis explicabo.
        </p>

        <div class="inner">
          <div
            class="article"
            v-for="post in $page.posts.edges"
            :key="post.node.id"
          >
            <div class="thumbnail">
              <g-image
                class="thum"
                :src="post.node.thumbnail.src"
                :alt="post.node.title"
              />
            </div>
            <g-link :to="post.node.path">
              <h4 class="title" v-html="post.node.title" />
            </g-link>
            <p class="card-text" v-html="post.node.excerpt" />
            <p class="muted date">{{ post.node.date }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- <CallToAction /> -->
  </Layout>
</template>
<page-query>
query Journal {
	posts: allArticles {
    edges{
      node{
        id
        title
        thumbnail
        excerpt
        date(format: "DD, MMMM YY")
        path
      }
    }
  }
}
</page-query>
<script>
export default {};
</script>

<style>
</style>