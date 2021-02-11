<template>
  <Layout>
    <Hero />
    <FeaturedPost :projects="$page.projects.edges" />
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
  }
}
</page-query>


<script>
import Hero from "@/components/Hero";
import FeaturedPost from "@/components/FeaturedPost";
export default {
  metaInfo: {
    title: "Aloha Adios!",
  },
  components: {
    Hero,
    FeaturedPost,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
