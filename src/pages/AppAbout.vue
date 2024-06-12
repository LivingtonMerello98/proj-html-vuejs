<script>

//header
import UniversalHeader from "../components/AppUniversalHeader.vue";
import HeaderAboutContacts from "../components/HeaderAboutContacts.vue";


//main
import AppGifSection from "../components/about-page-components/AppGifSection.vue"
import AppAboutUs from "../components/about-page-components/AppAboutUs.vue"

export default {
  name: "AppAbout",
  components: {
    UniversalHeader,
    HeaderAboutContacts,
    AppGifSection,
    AppAboutUs,
  },
};
</script>

<template>
  <UniversalHeader />
  <HeaderAboutContacts />
  
  <main>
    <AppGifSection />
    <AppAboutUs />
    <!-- <section>about us</section>
    <section>why people choose us</section>
    <section>meet our team</section>
    <section>testimonials</section>
    <section>featured projects</section> -->
  </main>
  <!-- <footer>footer</footer> -->
</template>

<style></style>
