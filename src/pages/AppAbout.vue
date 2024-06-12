<script>

//header
import UniversalHeader from "../components/AppUniversalHeader.vue";
import HeaderAboutContacts from "../components/HeaderAboutContacts.vue";


//main
import AppGifSection from "../components/about-page-components/AppGifSection.vue"
import AppAboutUs from "../components/about-page-components/AppAboutUs.vue"
import AppWhyChooseUs from "../components/about-page-components/AppWhyChooseUs.vue"

export default {
  name: "AppAbout",
  components: {
    UniversalHeader,
    HeaderAboutContacts,
    AppGifSection,
    AppAboutUs,
    AppWhyChooseUs,
  },
};
</script>

<template>
  <UniversalHeader />
  <HeaderAboutContacts />
  
  <main>
    <AppGifSection />
    <AppAboutUs />
    <AppWhyChooseUs />
    
    <!-- <section>meet our team</section>
    <section>testimonials</section>
    <section>featured projects</section>  -->
  </main>
  <!-- <footer>footer</footer> -->
</template>

<style></style>
