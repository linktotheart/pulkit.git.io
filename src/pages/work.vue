<template>
  <Layout>
    <div>

        <div class="page-title bg-secondary py-6">
          <div class="container mt-4">
              <h1 class="text-dark font-weight-bolder"> Selected Works </h1>
              <p class="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ullam repudiandae ipsa minima quaerat error, culpa aut ex deleniti eligendi ducimus? </p>
          </div>
        </div>
      <div class="page-body container">
       

        <div class="projects">
          <div class="grid">
            <div
              class="grid-item-alt"
              v-for="post in $page.posts.edges"
              :key="post.node.id"
            >
              <div class="project mb-3">
                <g-link :to="post.node.path" class="project-link">
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


