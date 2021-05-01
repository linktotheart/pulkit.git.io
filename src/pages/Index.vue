<template>
  <Layout>

    <Hero />
    <FeaturedPost :projects="$page.projects.edges" />
    <LatestArticles :articles="$page.articles.edges" />
    
    <!-- <CallToAction /> -->
  </Layout>
</template>

<page-query>
query {
  projects: allProjects (limit: 6) {
    edges{
      node{
        id
        title
        thumbnail (width:420, quality: 45)
        path
        categories
      }
    }
  },
  articles: allArticles (limit: 3){
    edges {
      node {
        id
        title
        thumbnail (width:400, quality: 65)
        excerpt
        date (format: "DD MMM YYYY")
        path
        timeToRead
      }
    }
  }
}
</page-query>


<script>
import Hero from "@/components/Hero";
import FeaturedPost from "@/components/FeaturedPost";
import LatestArticles from "@/components/LatestArticles";
export default {
  metaInfo: {
    title: "Welcome",
    content: "Pulkit Singh | Personal Blog | Technical Creative",
    
  },
  components: {
    Hero,
    FeaturedPost,
    LatestArticles,
  },
  
};
</script>

<style>
</style>
