<template>
  <Layout>
    <Hero />
    <FeaturedPost :projects="$page.projects.edges" />
    <LatestArticles :articles="$page.articles.edges" />
    <!-- <CallToAction />
    <Footer /> -->
  </Layout>
</template>

<page-query>
query {
  projects: allProjects {
    edges{
      node{
        id
        title
        thumbnail
        date (format: "YYYY")
        thumbnail 
        path
      }
    }
  },
  articles: allArticles {
    edges {
      node {
        id
        title
        thumbnail
        category
        path
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
