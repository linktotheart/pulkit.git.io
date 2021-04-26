<template>
  <header class="main-header fixed-top" @scroll="handleSCroll">
    <nav class="navbar px-md-4 px-lg-5 navbar-expand-lg">
      <a class="font-weight-bold d-flex text-capitalize navbar-brand" href="/">
        <svg
          version="1.1"
          width="32"
          class="mr-2"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
        >
          <path
            d="M492.137,15.556c-12.058-5.034-25.859-2.352-35.15,6.834l-65.088,64.349c-41.042-24.673-87.679-37.633-135.897-37.633
			s-94.855,12.961-135.896,37.633L55.022,22.391c-9.29-9.185-23.1-11.867-35.158-6.834C7.808,20.59,0,32.285,0,45.349v235.969
			c0,119.984,97.649,217.633,217.633,217.633h76.735C414.351,498.951,512,401.302,512,281.318V45.349
			C512,32.285,504.192,20.59,492.137,15.556z M471.149,281.318c0,97.458-79.323,176.782-176.782,176.782h-76.735
			c-97.458,0-176.782-79.323-176.782-176.782V65.861l62.169,61.448c6.986,6.907,18.141,7.862,26.22,2.275
			c19.822-13.706,40.974-23.8,64.123-30.352v24.53c0,11.28,9.145,20.426,20.426,20.426s20.426-9.145,20.426-20.426V91.327
			c14.979-1.464,28.596-1.464,43.574,0v32.436c0,11.28,9.145,20.426,20.426,20.426s20.426-9.145,20.426-20.426v-24.53
			c23.149,6.553,44.292,16.647,64.114,30.354c8.079,5.587,19.125,4.633,26.112-2.275l62.284-61.45V281.318z"
          />

          <path
            d="M346.794,315.59c-11.024-2.403-21.904,4.586-24.306,15.608c-2.929,13.445-15.063,23.203-28.85,23.203
			c-8.558,0-16.694-3.723-22.322-10.214c-0.445-0.513-0.918-0.994-1.407-1.456l27.357-27.113
			c9.821-9.821,2.865-26.369-11.024-26.369h-60.484c-13.889,0-20.845,16.549-11.024,26.369l27.237,27.116
			c-0.532,0.496-1.04,0.959-1.522,1.514c-5.627,6.491-13.763,10.184-22.322,10.184c-13.787,0-25.92-9.774-28.85-23.218
			c-2.402-11.023-13.285-18.017-24.306-15.616c-11.022,2.402-18.01,13.281-15.608,24.302c6.99,32.076,35.909,55.355,68.765,55.355
			c13.516,0,26.582-3.885,37.756-10.994c11.174,7.109,24.24,10.993,37.756,10.993c32.855,0,61.775-23.281,68.765-55.357
			C364.804,328.874,357.816,317.992,346.794,315.59z"
          />

          <circle cx="163.622" cy="241.974" r="21.855" />

          <circle cx="348.378" cy="241.974" r="21.855" />
        </svg>
        <h3 class="mb-0" v-html="settings.header_title" />
      </a>

      <div class="navbar-collapse" :class="{ 'nav-open': showNav }">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mr-md-4">
            <g-link to="/work" class="nav-link">Work</g-link>
          </li>
          <li class="nav-item mr-md-3">
            <g-link to="/journal" class="nav-link">Journal</g-link>
          </li>
          <li class="nav-item">
            <g-link to="/about" class="nav-link">About</g-link>
          </li>
        </ul>
      </div>

      <button
        id="nav-toggler"
        class="nav-toggler menu"
        :class="{ opened: showNav }"
        @click="navToggle"
        aria-label="Main Menu"
      >
        <svg width="32" height="32" viewBox="0 0 100 100">
          <path
            class="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          ></path>
          <path class="line line2" d="M 20,50 H 80"></path>
          <path
            class="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          ></path>
        </svg>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json"),
      showNav: false,
    };
  },
  methods: {
    navToggle() {
      this.showNav = !this.showNav;
    },
    handleSCroll(event) {
      let header = document.querySelector(".main-header");
      if (window.scrollY > 300) {
        // console.log(window.scrollY);
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    },
  },
  created() {
    if (process.isClient) {
      // browser only code
      window.addEventListener("scroll", this.handleSCroll);
    }

    //
  },
};
</script>

