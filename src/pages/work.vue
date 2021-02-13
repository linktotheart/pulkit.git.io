<template>
  <Layout>
    <div class="container">
      <div class="page-header">
        <h1 class="title is-centered">Works</h1>
      </div>
      <div class="page-body">
        <p class="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis culpa
          adipisci laboriosam corporis explicabo.
        </p>

        <div class="inner">
          <div
            class="project"
            v-for="post in $page.posts.edges"
            :key="post.node.id"
          >
            <g-link :to="post.node.path">
              <div class="thumbnail">
                <g-image
                  class="thum"
                  :src="post.node.thumbnail.src"
                  :alt="post.node.title"
                />
              </div>

              <h4 class="title" v-html="post.node.title" />
            </g-link>
          </div>
        </div>
      </div>
    </div>

    <!-- <CallToAction /> -->
  </Layout>
</template>


<page-query>
query {

    posts: allProjects{
    pageInfo{
        totalPages
        currentPage
    }
    edges {
      node {
        id
        title
        thumbnail
        path
      }
    }
  }
}
</page-query>


