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

        <div class="projects">
          <div class="grid">
            <div
              class="grid-item-alt"
              v-for="post in $page.posts.edges"
              :key="post.node.id"
            >
              <div class="project mb-3">
                <g-link :to="post.node.path">
                  <div class="thumbnail">
                    <g-image
                      class="thum"
                      :src="post.node.thumbnail.src"
                      :alt="post.node.title"
                    />
                    <div class="caption">
                      <h4 class="title" v-html="post.node.title" />
                    </div>
                  </div>
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


