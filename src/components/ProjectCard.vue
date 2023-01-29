<template>
  <article
    ref="card"
    class="card"
    @mouseover="overlayOn"
    @mouseout="overlayOff"
  >
    <div class="card__wrapper">
      <img
        :src="img"
        :class="{ 'is-active': hover }"
        class="card__image"
        alt="project preview"
      />
      <p :class="{ 'is-active': hover }" class="card__project-name">
        {{ name }}
      </p>
      <div :class="{ 'is-active': hover }" class="card__cover">
        <p class="card__cover-text">
          {{ cover }}
        </p>
        <div class="card__cover-links">
          <a class="card__cover-link" :href="ghLink" target="_blank">
            Github
          </a>
          <a class="card__cover-link" :href="liveLink" target="_blank">
            Live
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import helpers from '@/helpers/helpers';

export default {
  props: {
    img: String,
    name: String,
    cover: String,
    ghLink: String,
    liveLink: String
  },
  data() {
    return {
      mobile: null,
      hover: null
    };
  },
  created() {
    this.mobile = helpers.checkScreenSize();
    window.addEventListener('resize', () => {
      this.mobile = helpers.checkScreenSize();
    });
  },
  mounted() {
    window.addEventListener('resize', this.mobileView);
    this.mobileView();
  },
  methods: {
    overlayOn() {
      this.hover = true;
    },

    overlayOff() {
      this.hover = false;
    },

    mobileView() {
      if (this.mobile === true) {
        this.overlayOn();
      } else {
        this.overlayOff();
      }
    }
  }
};
</script>

<style scoped lang="scss">
@use '@/assets/styles/components/ProjectCard.scss' as *;
</style>
