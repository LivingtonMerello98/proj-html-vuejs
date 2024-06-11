<script>
import OurHistory from '../components/home-page-components/OurHistory.vue';
import BettersService from '../components/home-page-components/BettersService.vue';


export default {
    name: "AppHome",

    components: {
        OurHistory,
        BettersService
    }
}
</script>

<template>
    <h1>Sei in Home</h1>
    <OurHistory />
    <BettersService />
</template>

<style lang="scss" scoped>
@use '../assets/partials/mixin' as *;
@use '../assets/partials/variables' as *;
</style>