<script>

//header
import UniversalHeader from "../components/AppUniversalHeader.vue";
import HeaderAboutContacts from "../components/HeaderAboutContacts.vue";


//main
import AppGifSection from "../components/about-page-components/AppGifSection.vue"
import AppAboutUs from "../components/about-page-components/AppAboutUs.vue"
import AppWhyChooseUs from "../components/about-page-components/AppWhyChooseUs.vue"
import AppOurTeam from "../components/about-page-components/AppOurTeam.vue"
import AppTestimonials from "../components/about-page-components/AppTestimonials.vue"
import AppFeaturedProjects from "../components/about-page-components/AppFeaturedProjects.vue"



export default {
  name: "AppAbout",
  components: {
    UniversalHeader,
    HeaderAboutContacts,
    AppGifSection,
    AppAboutUs,
    AppWhyChooseUs,
    AppOurTeam,
    AppTestimonials,
    AppFeaturedProjects,
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
    <AppOurTeam />
    <AppTestimonials />
    <AppFeaturedProjects />
  </main>
</template>

<style>
/* :hover{
    color: #20C7DF;
  } */
</style>
