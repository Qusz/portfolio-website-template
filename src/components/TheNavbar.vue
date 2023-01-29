<template>
  <header
    :class="{
      'scroll-up': scrollUp,
      'scroll-down': scrollDown
    }"
    class="header container-fluid"
  >
    <nav class="navbar">
      <div
        v-show="mobile"
        :class="{ 'is-active': mobileNav }"
        class="navbar__hamburger"
        @click="toggleMobileNav"
      >
        <img src="/menu-icon.svg" alt="menu icon" />
      </div>
      <ul
        class="navbar__items"
        :class="{ 'is-active': mobileNav }"
        @click="closeMobileNav($event)"
      >
        <li
          v-for="item in navItems"
          :key="item.id"
          class="navbar__item navbar-hover"
        >
          <a class="nav-link" :href="item.href" :target="item.target">
            {{ item.text }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import helpers from '@/helpers/helpers';

export default {
  data() {
    return {
      mobile: null,
      mobileNav: null,
      lastScrollPosition: 0,
      scrollUp: null,
      scrollDown: null,
      navItems: [
        { id: 1, text: 'Introduction', href: '#introduction', target: '_self' },
        { id: 2, text: 'About me', href: '#about', target: '_self' },
        { id: 3, text: 'Projects', href: '#projects', target: '_self' },
        { id: 4, text: 'Contact', href: '#contact', target: '_self' },
        { id: 5, text: 'Resume', href: 'https://google.com', target: '_blank' }
      ]
    };
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
      const currentScroll = window.scrollY;

      switch (true) {
        case currentScroll > this.lastScrollPosition &&
          !this.scrollDown &&
          !this.mobile:
          this.scrollDown = true;
          this.scrollUp = false;
          break;
        case currentScroll < this.lastScrollPosition &&
          this.scrollDown &&
          !this.mobile:
          this.scrollDown = false;
          this.scrollUp = true;
          break;
        case currentScroll <= 0:
          this.scrollUp = false;
          this.scrollDown = false;
          break;
        default:
          throw new Error('Cannot get the screen size');
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
};
</script>

<style scoped lang="scss">
@use '@/assets/styles/components/TheNavbar.scss' as *;
</style>
