<template>
  <Layout>
        <div class="page-title bg-secondary py-6">
          <div class="container mt-4">
              <h1 class="text-dark font-weight-bolder"> Journals</h1>
              <p class="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ullam repudiandae ipsa minima quaerat error, culpa aut ex deleniti eligendi ducimus? </p>
          </div>
        </div>
  
      <div class="page-body container">
       

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