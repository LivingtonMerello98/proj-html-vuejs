<script>
import OurHistory from '../components/home-page-components/OurHistory.vue';
import BettersService from '../components/home-page-components/BettersService.vue';
import Services from '../components/home-page-components/Services.vue';
import OurYachts from '../components/home-page-components/OurYachts.vue';
import WorldRallly from '../components/home-page-components/WorldRallly.vue';



export default {
    name: "AppHome",

    components: {
        OurHistory,
        BettersService,
        Services,
        OurYachts,
        WorldRallly
    }
}
</script>

<template>
    <OurHistory />
    <BettersService />
    <Services />
    <OurYachts />
    <WorldRallly />
</template>

<style lang="scss" scoped>
@use 'src/assets/partials/mixin' as *;
@use 'src/assets/partials/variables' as *;
</style>