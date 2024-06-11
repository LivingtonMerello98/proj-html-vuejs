<script>
import OurHistory from '../components/home-page-components/OurHistory.vue';
import BettersService from '../components/home-page-components/BettersService.vue';
import Services from '../components/home-page-components/Services.vue';
import OurYachts from '../components/home-page-components/OurYachts.vue'



export default {
    name: "AppHome",

    components: {
        OurHistory,
        BettersService,
        Services,
        OurYachts
    }
}
</script>

<template>
    <OurHistory />
    <BettersService />
    <Services />
    <OurYachts />
</template>

<style lang="scss" scoped>
@use '../assets/partials/mixin' as *;
@use '../assets/partials/variables' as *;
</style>