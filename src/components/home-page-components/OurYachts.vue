<script>
export default {
    name: 'OurYachts',
    data() {
        return {
            yachts: [
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'express',
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/services-1.jpg'
                },
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'cruiser',
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/services1.jpg'
                },
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'name cruiser',
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v2/wp-content/uploads/2020/12/services3.jpg'
                },
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'flybridges',
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/services2.jpg'
                },
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'sedan bridges',
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/services4.jpg'
                },
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'tri-deck',
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/services5.jpg'
                },
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'megayacths',
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/services6.jpg'
                },
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    name: 'convertibles',
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/services7.jpg'
                }
            ]
        }
    }
}
</script>




<template>
    <section class="py-5 bg custom-primary-color">
        <div class="container">
            <div class="row">
                <div class="col-12 py-4">
                    <div class="title text-center py-4">
                        <h2 class="title-s mb-3 fw-bold">Our Yachts</h2>
                        <div class="col-12 my-4" style="background-color:#09C2DD;">
                            <div class="col-1" style="height: 1px; background-color:#ffffff ; margin:0 auto;">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 p-3" v-for="yacht in yachts" :key="yacht.url">
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
                <div class="col-12 text-center py-5">
                    <button class="btn-border-to-white">View All</button>
                </div>
            </div>
        </div>
    </section>
</template>



<style lang="scss" scoped>
@use 'src/assets/partials/mixin' as*;
@use 'src/assets/partials/variables' as*;

.custom-primary-color {
    background-color: $custom-primary-color;
}

.icon-custom-primary-color {
    color: $custom-primary-color;
    font-size: $custom-title-m ;
}

.yacht-img {
    width: 100%;
    height: auto;
    max-width: 500px;
    max-height: 500px;
    object-fit: cover;
    border-radius: 5px;
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
    }

    .hover-text {
        color: white;
        font-size: 20px;
    }
}

.img-content:hover .overlay {
    opacity: 1;
}

.title-s {
    @include title-s;
}

.btn-border-to-white {
    @include btn-border-to-white;
}
</style>
