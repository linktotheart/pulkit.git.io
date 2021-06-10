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
  //   if(localStorage.getItem("dark", true)) {
  //     document.body.classList.add("dark")
  //   }
  }
  
};
</script>

<style>
.fade-enter-active {
  transition: all 0.25s ease;
}

.fade-enter {
  transform: translateY(-2rem);
  opacity: 0.5;
  filter: blur(2px);
}
</style>