<script>
    export default {
    name: "AppFeaturedProjects"
    
}
</script>

<template>
     <section>
         <div>
             <span class="divider text-center"></span>
             </div>
             <div class="container">
            <h2 class="py-5">Featured Projects</h2>
            <hr class="mb-5">

            <div class="row">
                <div class="col-4 py-5 px-3">
                    <a href="#">
                        <img src="/src/components/about-page-components/services/services-1.jpg" alt="">
                    </a>
                </div>
                <div class="col-4 py-5 px-3">
                    <a href="#">
                        <img src="/src/components/about-page-components/services/services-2.jpg" alt="">
                    </a>
                </div>
                <div class="col-4 py-5 px-3">
                    <a href="#">
                        <img src="/src/components/about-page-components/services/services-3.jpg" alt="">
                    </a>
                </div>
                <div class="col-4 py-5 px-3">
                    <a href="#">
                        <img src="/src/components/about-page-components/services/services-4.jpg" alt="">
                    </a>
                </div>
                <div class="col-4 py-5 px-3">
                    <a href="#">
                        <img src="/src/components/about-page-components/services/services-5.jpg" alt="">
                    </a>
                </div>
                <div class="col-4 py-5 px-3">
                    <a href="#">
                        <img src="/src/components/about-page-components/services/services-6.jpg" alt="">
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use 'src/assets/partials/mixin' as*;
    @use 'src/assets/partials/variables' as*;

    img{
        width: 400px;
        cursor: pointer;
        :hover{
            background-color: black;
            background-image: url();
            z-index: initial;
            opacity: 0.8;
        }
    }
    
    h2 {
        font-weight: bold;
        font-size: $custom-title-section-size
    }
</style>