<script>
import OurHistory from '../components/home-page-components/OurHistory.vue';
export default {
    name: "AppHome",

    components: {
        OurHistory
    }
}
</script>

<template>
    <h1>Sei in Home</h1>
    <OurHistory />
</template>

<style lang="scss" scoped>
@use 'src/assets/partials/mixin' as *;
@use 'src/assets/partials/variables' as *;
</style>