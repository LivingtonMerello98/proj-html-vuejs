<script>
import OurHistory from '../components/home-page-components/OurHistory.vue';
import BettersService from '../components/home-page-components/BettersService.vue';
import Services from '../components/home-page-components/Services.vue';


export default {
    name: "AppHome",

    components: {
        OurHistory,
        BettersService,
        Services
    }
}
</script>

<template>
    <OurHistory />
    <BettersService />
    <Services />
</template>

<style lang="scss" scoped>
@use '../assets/partials/mixin' as *;
@use '../assets/partials/variables' as *;
</style>