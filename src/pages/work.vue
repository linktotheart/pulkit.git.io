<template>
  <Layout>
    <div>

        <div class="page-title bg-secondary py-6">
          <div class="container mt-4">
              <div class="row">
                  <div class="col-lg-8">
                      <h1 class="text-dark font-weight-bolder"> Selected Works </h1>
                      <p class="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ullam repudiandae ipsa minima quaerat error, culpa aut ex deleniti eligendi ducimus? </p>
                  </div>
                  <div class="col-lg-4">

                  </div>

              </div>
          </div>
        </div>
      <div class="page-body container">
       

        <div class="projects mt-4">
          <div class="row">
            <div
              class="col-lg-4 col-md-6"
              v-for="post in $page.posts.edges"
              :key="post.node.id"
            >
              <div class="project card-vertical mb-4 card ">
                <g-link :to="post.node.path" class="project-link">
                  <div class="card-img ">
                    <g-image
                      class="thum"
                      :src="post.node.thumbnail.src"
                      :alt="post.node.title"
                    />
                     <span class="background-color " style="background-color: rgba(14, 14, 14, .3);"></span>
                    
                  </div>
                  <div class="card-img-overlay">
                      <h4 class="card-title text-dark text-center text-capitalize text-decoration-none " v-html="post.node.title" />
                      <span class="card-category text-center text-capitalize subtitle"> {{ post.node.categories[0] }}</span>

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
        categories
      }
    }
  }
}
</page-query>


