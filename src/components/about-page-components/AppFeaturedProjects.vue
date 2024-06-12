<script>
    export default {
    name: "AppFeaturedProjects"
    
}
</script>

<template>
     <section>
        <h2>Featured Projects</h2>
        <div>
            <span class="divider text-center"></span>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <img src="/src/components/about-page-components/services/services-1.jpg" alt="">
                </div>
                <div class="col-4">
                    <img src="/src/components/about-page-components/services/services-2.jpg" alt="">
                </div>
                <div class="col-4">
                    <img src="/src/components/about-page-components/services/services-3.jpg" alt="">
                </div>
                <div class="col-4">
                    <img src="/src/components/about-page-components/services/services-4.jpg" alt="">
                </div>
                <div class="col-4">
                    <img src="/src/components/about-page-components/services/services-5.jpg" alt="">
                </div>
                <div class="col-4">
                    <img src="/src/components/about-page-components/services/services-6.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use 'src/assets/partials/mixin' as*;
    @use 'src/assets/partials/variables' as*;

    img{
        width: 300px;
    }
    
</style>