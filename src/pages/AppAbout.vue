<script>
import UniversalHeader from "../components/AppUniversalHeader.vue";
import HeaderAboutContacts from "../components/HeaderAboutContacts.vue";

export default {
  name: "AppAbout",
  components: {
    UniversalHeader,
    HeaderAboutContacts,
  },
};
</script>

<template>
  <UniversalHeader />
  <HeaderAboutContacts />

  <main>
    <section>home-about</section>
    <section>container+video</section>
    <section>about us</section>
    <section>why people choose us</section>
    <section>meet our team</section>
    <section>testimonials</section>
    <section>featured projects</section>
  </main>
  <footer>footer</footer>
</template>

<style></style>
