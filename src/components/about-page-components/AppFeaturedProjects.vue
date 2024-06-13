<script>
    export default {
    name: "AppFeaturedProjects",
    data() {
        return {
            yachts: [
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'Express',
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/services-1.jpg'
                },
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'Cruiser',
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/services1.jpg'
                },
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'Sport cruiser',
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/services2.jpg'
                    
                },
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'Flybridges',
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v2/wp-content/uploads/2020/12/services3.jpg'
                },
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'Sedan bridges',
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/services4.jpg'
                },
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'Tri-deck',
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/services5.jpg'
                },
            ]
        }
    }
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
                <!-- <div class="col-lg-4 col-md-6 col-sm-12"> -->
                <div class="col-lg-4 col-md-6 col-sm-12 py-5 px-3"
                v-for="yacht in yachts" :key="yacht.url">
                    <div class="img-content position-relative">
                        <img :src="yacht.url" class="yacht-img">
                        <div class="overlay">
                            <div class="text-center">
                                <div v-html="yacht.icon" class=" icon-custom-primary-color"></div>
                                <div class="hover-text fs-2 fw-bold">{{ yacht.name }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use 'src/assets/partials/mixin' as*;
    @use 'src/assets/partials/variables' as*;

    
    
    h2 {
        font-weight: bold;
        font-size: $custom-title-section-size
    }

    .img-content {
    position: relative;
    overflow: hidden;

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 0.3s ease;
        cursor: pointer;
    }

    .hover-text {
        color: white;
        font-size: 20px;
    }
}

.img-content:hover .overlay {
    opacity: 1;
}

.icon-custom-primary-color {
    color: $custom-primary-color;
    font-size: $custom-title-m ;
}

</style>