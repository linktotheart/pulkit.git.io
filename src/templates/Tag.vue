<template>
  <Layout>
    <div class="page-title bg-primary pt-5 pb-5">
      <div class="container mt-4">
        <div class="row">
          <div class="col-lg-8">
            <h1 class="text-dark font-weight-bolder">Post Tagged With "<span class="text-danger" v-html="$page.tag.edges[0].node.id"></span>" </h1>
          </div>
          <div class="col-lg-4"></div>
        </div>
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
                <g-image
                  quality="50"
                  background="gray"
                  blur="12"
                  class="thumbnail img-fluid"
                  :src="item.node.thumbnail.src"
                />
              </g-link>
              <g-link
                :to="item.node.path"
                class="card-title mb-3 h4 text-dark text-capitalize text-decoration-none"
                >{{ item.node.title }}</g-link
              >

              <span class="card-date">{{ item.node.date }}</span>
                           
                <p class="card-text mb-3">
                  {{ `${item.node.excerpt.slice(0, 185)}...` }}
                  <br />
                </p>
              <g-link class="btn btn-clean" :to="item.node.path"
                >Read More
                <svg
                  class="icon-arrow icon-arrow-right"
                  width="25"
                  height="10"
                  viewBox="0 0 25 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 1L24 5L20 9"
                    stroke="currentColor"
                    stroke-width="1.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M7 5L24 5"
                    stroke="currentColor"
                    stroke-width="1.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </g-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>

query ($id: ID!) {
    tag: allTag(filter: { id : { eq : $id }}) {
    edges {
    node {
        id
        }
    }
}

 posts: allArticles(filter: { categories: { contains: [$id] }}) {
    edges {
      node {
        id
        title
        path
        thumbnail
        date (format: "DD MMM YYYY")
        excerpt
        categories {
          id
          path
        }
      }
    }
  }
}
</page-query>
