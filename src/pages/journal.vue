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

        <div class="articles">
          <div class="grid">
            <div
              class="grid-item-3"
              v-for="item in $page.posts.edges"
              :key="item.node.id"
            >
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
                    {{ `${item.node.excerpt.slice(0, 80)}...` }}
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