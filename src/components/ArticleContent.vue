<template>
  <article class="article-content" v-html="content" />
</template>

<script>
export default {
  props: {
    content: String,
  },
};
</script>

