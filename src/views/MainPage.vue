<template>
  <div class="wrapper">
    <section id="introduction" class="hero container">
      <div class="hero__wrapper">
        <div class="hero__header">
          <h2 class="hero__title"><span>Hello,</span> I'm John.</h2>
          <p class="hero__subtitle">I build web applications.</p>
        </div>
        <p class="hero__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus amet
          et adipisci perferendis, eius aliquid facilis distinctio. Architecto
          sed alias aliquam fuga facere a consequuntur molestias. Impedit esse
          suscipit odio.
        </p>
        <div class="hero__button-wrapper">
          <a class="hero__button" href="mailto:johndoe@doe.com" target="_blank">
            Contact me
          </a>
        </div>
      </div>
    </section>

    <section id="about" class="about container">
      <ContentSplitter>about_</ContentSplitter>
      <div class="about__wrapper">
        <article class="about__content">
          <div class="about__content-text">
            <p class="about__content-text-item">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi maxime aut sint voluptate molestias est iusto molestiae
              accusamus ea porro aspernatur magni et, ipsa eius quam sed.
              Itaque, asperiores earum.
            </p>
            <p class="about__content-text-item">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi maxime aut sint voluptate molestias est iusto molestiae
              accusamus ea porro aspernatur magni et, ipsa eius quam sed.
              Itaque, asperiores earum.
            </p>
            <div class="about__tech">
              <p class="about__tech-title">Tech I work with:</p>
              <div class="about__tech-wrapper">
                <ul class="about__tech-items">
                  <li class="about__tech-item">Lorem/Ipsum</li>
                  <li class="about__tech-item">Dolor/Est</li>
                  <li class="about__tech-item">Itaque</li>
                </ul>
                <ul class="about__tech-items">
                  <li class="about__tech-item">Amet</li>
                  <li class="about__tech-item">Vue</li>
                  <li class="about__tech-item">Excepturi, maxime, aut</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="about__content-pic">
            <img src="/portrait.jpg" alt="author's image" />
          </div>
        </article>
      </div>
    </section>

    <section id="projects" class="projects container">
      <ContentSplitter>projects_</ContentSplitter>
      <div class="projects__wrapper">
        <div class="project__cards-wrapper">
          <article class="projects__cards">
            <project-card
              v-for="item in projectCards"
              v-once
              :key="item.id"
              :name="item.name"
              :cover="item.description"
              :img="item.img"
              :gh-link="item.ghLink"
              :live-link="item.liveLink"
              class="project-card"
            >
            </project-card>
          </article>
        </div>
      </div>
    </section>

    <section id="contact" class="contact container">
      <ContentSplitter>contact_</ContentSplitter>
      <div class="contact__wrapper">
        <article class="contact__content">
          <h2 class="contact__title">Feel free to reach out!</h2>
          <div class="contact__links">
            <a
              href="mailto:johndoe@mail.com"
              class="contact__link"
              target="_blank"
            >
              Email &#x1F4AC;
            </a>
            <a href="https://github.com" class="contact__link" target="_blank">
              GitHub
              <img
                class="github-logo"
                src="@/assets/icons/github-mark-white.svg"
                alt="github logo"
              />
            </a>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';
import ContentSplitter from '@/components/ContentSplitter.vue';
import data from '@/data/data';

import mainPageAnimations from '@/helpers/animations';
import helpers from '@/helpers/helpers';

export default {
  name: 'MainPage',
  components: { ProjectCard, ContentSplitter },
  data() {
    return {
      projectCards: data.projectCards
    };
  },
  mounted() {
    // Main page animations for desktop only
    if (helpers.checkScreenSize() === false) {
      mainPageAnimations();
    }
  }
};
</script>

<style lang="scss" scoped>
@use '@/assets/styles/views/main-page.scss' as *;
</style>
