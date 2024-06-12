<script>
export default {
    name: 'OurYachts',
    data() {
        return {
            yachts: [
                {
                    name: 'express',
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/services-1.jpg'
                },
                {
                    name: 'cruiser',
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/services1.jpg'
                },
                {
                    name: 'name cruiser',
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v2/wp-content/uploads/2020/12/services3.jpg'
                },
                {
                    name: 'flybridges',
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/services2.jpg'
                },
                {
                    name: 'sedan bridges',
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/services4.jpg'
                },
                {
                    name: 'tri-deck',
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/services5.jpg'
                },
                {
                    name: 'megayacths',
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/services6.jpg'
                },
                {
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
                    <div class="title text-center">
                        <h2 class="title-s mb-3">Our Yachts</h2>
                        <div class="col-12 py-4" style="background-color:#6EC1E4;">
                            <div class="col-1" style="height: 1px; background-color:#ffffff ; margin:0 auto;">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 p-3" v-for="yacht in yachts" :key="yacht.url">
                    <div class="img-content">
                        <img :src="yacht.url" class="yacht-img">
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

.yacht-img {
    width: 100%;
    height: auto;
    max-width: 500px;
    max-height: 500px;
    object-fit: cover;
    border-radius: 5px;
}

.title-s {
    @include title-s
}

.btn-border-to-white {
    @include btn-border-to-white
}
</style>