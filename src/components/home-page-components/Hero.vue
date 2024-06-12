<script>
export default {
    name: 'Hero'
}
</script>

<template>
    <section class="bg-image">
        <div class="container py-5">
            <div class="row">
                <div class="col-12 text-center">
                    <h2>nav-header</h2>
                </div>
                <div class="col-12">
                    <div class="card-contnet">
                        <div class="text-content">
                            <h2 class="title-l">QuickWind</h2>
                            <p class="custom-sub-title-s">lorem ipsum</p>
                            <button class="btn-border-to-white">Learn More</button>
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

.bg-image {
    background-image: url('https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/bg1-1.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    .title-l {
        @include title-l
    }

    .custom-sub-title-s {
        @include sub-title-s
    }

    .btn-border-to-white {
        @include btn-border-to-white
    }
}
</style>