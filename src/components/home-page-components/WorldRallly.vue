<script>
export default {
    name: 'WorldRally'
}
</script>

<template>
    <section class="bg-image">
        <div class="container">
            <div class="row">
                <div class="col-8 py-5">
                    <div class="content py-5">
                        <h2 class="title-xl text-uppercase mb-3">enjoy</h2>
                        <h3 class="title-thin-m text-uppercase mb-3">world rally 2017-19</h3>
                        <p class="paragraph-white mb-5">Explore some of the most beautiful regions of the world. Make your
                            dreams
                            come true and join the
                            Yachtec World Rally 2017-19.</p>
                        <button class="btn-primary-to-secondary">More Details</button>
                    </div>
                </div>
                <div class="col-4"></div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use 'src/assets/partials/mixin' as*;
@use 'src/assets/partials/variables' as*;

.bg-image {
    background-image: url('https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/bg7.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;

    .title-xl {
        @include title-xl
    }

    .title-thin-m {
        @include title-thin-m
    }

    .paragraph-white {
        @include paragraph-white
    }

    .btn-primary-to-secondary {
        @include btn-primary-to-secondary
    }

}
</style>