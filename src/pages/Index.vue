<template>
  <Layout>
    <Hero />
    <FeaturedPost :projects="$page.projects.edges" />
    <LatestArticles :articles="$page.articles.edges" />
    <Quotes />
    <!-- <CallToAction /> -->
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
import Quotes from "@/components/Quotes";
export default {
  metaInfo: {
    title: "Welcome",
    content: "John Doe",
  },
  components: {
    Hero,
    FeaturedPost,
    LatestArticles,
    Quotes,
  },
};
Quotes;
</script>

<style>
</style>
