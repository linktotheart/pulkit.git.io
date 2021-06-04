<template>
  <div class="wrapper">
    <Header />

    <transition name="fade"  appear>
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
  mounted(){
    if(localStorage.getItem("dark")) {
      document.body.classList.add("dark")
    }
  }
  
};
</script>

<style>
.fade-enter-active {
  transition: all 0.35s ease;
}

.fade-enter {
  transform: translateY(-1rem);
  opacity: 0.95;
}
</style>