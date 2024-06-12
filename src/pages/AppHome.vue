<script>
import OurHistory from '../components/home-page-components/OurHistory.vue';
import BettersService from '../components/home-page-components/BettersService.vue';
import Services from '../components/home-page-components/Services.vue';
import OurYachts from '../components/home-page-components/OurYachts.vue';
import WorldRallly from '../components/home-page-components/WorldRallly.vue';
import AppFooterShare from '../components/AppFooterShare.vue';
import blog from '../components/home-page-components/blog.vue';
import Testimonials from '../components/home-page-components/Testimonials.vue';
import Hero from '../components/home-page-components/Hero.vue';



export default {
    name: "AppHome",

    components: {
        OurHistory,
        BettersService,
        Services,
        OurYachts,
        WorldRallly,
        AppFooterShare,
        blog,
        Testimonials,
        Hero

    }
}
</script>

<template>
    <Hero />
    <OurHistory />
    <BettersService />
    <Services />
    <OurYachts />
    <WorldRallly />
    <blog />
    <Testimonials />
    <footer>
        <AppFooterShare />
    </footer>
</template>

<style lang="scss" scoped>
@use 'src/assets/partials/mixin' as *;
@use 'src/assets/partials/variables' as *;
</style>