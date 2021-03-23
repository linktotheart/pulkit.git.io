<template>
  <div class="wrapper">
    <Header />
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
    <!--footer-->
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
.fade-enter-active {
  transition: all 0.5s ease;
}

.fade-enter {
  transform: translateY(-3rem);
  opacity: 0;
}
</style>