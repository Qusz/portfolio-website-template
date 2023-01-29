import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function mainPageAnimations() {
  const hero = gsap.timeline();
  hero.from('.hero__header', {
    opacity: 0.2,
    y: 50,
    ease: 'power1.in',
    duration: 1
  });

  hero.from(
    '.hero__content',
    {
      opacity: 0,
      x: -300,
      ease: 'power1',
      duration: 1
    },
    '-=80%'
  );

  hero.from('.hero__button-wrapper', {
    opacity: 0,
    ease: 'power4.out',
    y: -90,
    duration: 2
  });

  const about = gsap.timeline({
    scrollTrigger: {
      trigger: '.about',
      start: 'top bottom',
      once: true
    }
  });

  about.from('.about__content-text-item', {
    scale: 1.2,
    opacity: 0,
    ease: 'Sine.easeIn',
    duration: 1.2
  });

  about.from(
    '.about__tech',
    {
      x: -400,
      opacity: 0,
      ease: 'Power4.easeIn',
      duration: 1.2
    },
    '<'
  );

  about.from(
    '.about__content-pic',
    {
      scale: 1.5,
      opacity: 0,
      ease: 'back.out(1.7)',
      duration: 0.5
    },
    '<.5'
  );

  const projects = gsap.timeline({
    scrollTrigger: {
      trigger: '.projects',
      start: 'top bottom',
      once: true
    }
  });

  projects.from('.project-card', {
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.08,
    ease: 'circ.in'
  });
}
