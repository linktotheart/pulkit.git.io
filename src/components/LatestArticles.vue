<template>
  <div class="articles mt-6 pt-0">
    <div class="container">
      <h2 class="section-title h1 mb-4 font-weight-bold">Insights Views 🔥 </h2>


     
        <div class="row ">
          <div class="col-lg-4" v-for="item in articles" :key="item.node.id">
            <div class="card card-blog border-0 mb-4 card-vertical">
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
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>