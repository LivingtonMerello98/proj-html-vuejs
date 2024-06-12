<script>

//header
import UniversalHeader from "../components/AppUniversalHeader.vue";
import HeaderAboutContacts from "../components/HeaderAboutContacts.vue";

import AppGifSection from "../components/about-page-components/AppGifSection.vue"

export default {
  name: "AppAbout",
  components: {
    UniversalHeader,
    HeaderAboutContacts,
    AppGifSection,
  },
};
</script>

<template>
  <UniversalHeader />
  <HeaderAboutContacts />
  
  <main>
    <AppGifSection />
    <!-- <section>about us</section>
    <section>why people choose us</section>
    <section>meet our team</section>
    <section>testimonials</section>
    <section>featured projects</section> -->
  </main>
  <!-- <footer>footer</footer> -->
</template>

<style></style>
