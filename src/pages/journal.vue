<template>
  <Layout>
        <div class="page-title bg-secondary py-6">
          <div class="container mt-4">
              <h1 class="text-dark font-weight-bolder"> Journals</h1>
              <p class="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ullam repudiandae ipsa minima quaerat error, culpa aut ex deleniti eligendi ducimus? </p>
          </div>
        </div>
  
      <div class="page-body container">
       

        <div class="articles mt-4">
          <div class="row">
            <div
              class="col-lg-4 col-md-6"
              v-for="item in $page.posts.edges"
              :key="item.node.id"
            >
              <div class="card mb-4 card-blog border-0 card-vertical">
              <g-link :to="item.node.path" class="card-img mb-3 d-block">
                  <g-image class="thumbnail img-fluid" :src="item.node.thumbnail.src" />
              </g-link>
                <g-link :to="item.node.path" class="card-title mb-3 h4 text-dark text-capitalize text-decoration-none">{{ item.node.title }}</g-link>
                
                <span class="card-date">{{ item.node.date }}</span>
             
                <p class="card-text mb-3">
                  {{ `${item.node.excerpt.slice(0, 150)}...` }}
                  <br />
                </p>
                <g-link class="btn btn-clean " :to="item.node.path">Read More 
                <svg class="icon-arrow icon-arrow-right" width="25" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 1L24 5L20 9" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M7 5L24 5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path></svg>  
                </g-link>
             
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