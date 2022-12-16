<template>
  <header 
    :class="{ 
      'scroll-up': scrollUp,
      'scroll-down': scrollDown 
    }" 
    class="header container-fluid"
  >
    <nav
      class="navbar"
    >
      <div 
        class="navbar__hamburger"
        v-show="mobile"
        @click="toggleMobileNav"
      >
        <font-awesome-icon 
          icon="fa-solid fa-bars" 
          class="icon"
          :class="{ 'icon-active': mobileNav }"
        />
      </div>
      <ul 
        class="navbar__items"
        :class="{ 'is-active': this.mobileNav }"
        @click="this.closeMobileNav($event)"
      >
        <li class="navbar__item navbar-hover">
          <a 
          class="nav-link"
          href="#introduction">Introduction</a>
        </li>
        <li class="navbar__item navbar-hover">
          <a 
          class="nav-link"
          href="#about">About me</a>
        </li>
        <li class="navbar__item navbar-hover">
          <a 
          class="nav-link"
          href="#projects">Projects</a>
        </li>
        <li class="navbar__item navbar-hover">
          <a 
          class="nav-link"
          href="#contact">Contact</a>
        </li>
        <li class="navbar__item">
          <a 
            class="nav-link"
            href="https://google.com"
            target="_blank"
          >
          Resume
        </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import helpers from '@/helpers/helpers.js';

library.add(faBars);

export default {
  components: { FontAwesomeIcon },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      lastScrollPosition: 0,
      scrollUp: null,
      scrollDown: null
    }
  },
  created() {
    this.mobile = helpers.checkScreenSize();
    window.addEventListener('resize', () => {
      this.mobile = helpers.checkScreenSize();

      // So that mobile nav is closed properly on manual window resize
      if (window.innerWidth >= 1024 && this.mobileNav) {
        this.toggleMobileNav();
      }
    });
  },
  mounted() {
    window.addEventListener('scroll', this.scrollDirection);
  },
  methods: {
    scrollDirection() {
      let currentScroll = window.scrollY;

      switch(true) {
        case currentScroll > this.lastScrollPosition && !this.scrollDown && !this.mobile:
          this.scrollDown = true;
          this.scrollUp = false;
          break;
        case currentScroll < this.lastScrollPosition && this.scrollDown && !this.mobile:
          this.scrollDown = false;
          this.scrollUp = true;
          break;
        case currentScroll <= 0:
          this.scrollUp = false;
          this.scrollDown = false;
          break;
      }

      this.lastScrollPosition = currentScroll;
    },

    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;

      if (document.body.style.overflowY === 'hidden') {
        document.body.style.overflowY = '';
      } else {
        document.body.style.overflowY = 'hidden';
      }
    },

    closeMobileNav(e) {
      if (this.mobile !== true) return;
      if (e.target.classList.contains('nav-link')) {
        this.toggleMobileNav();
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @use '@/assets/styles/components/TheNavbar.scss' as *;
</style>