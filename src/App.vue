<template>
  <the-navbar></the-navbar>
  <main>
    <router-view />
  </main>
  <the-footer></the-footer>
</template>

<script>

import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  components: { TheFooter, TheNavbar }
}

</script>

<style>
</style>