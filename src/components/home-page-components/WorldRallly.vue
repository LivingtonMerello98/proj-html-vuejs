<script>
export default {
    name: 'WorldRally'
}
</script>

<template>
    <section class="bg-image">
        <div class="container py-5">
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
                <div class="col-4 col-sm-4 col-md-4 col-lg-none"></div>
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
        @include title-xl;
        font-size: 3rem; /* Impostato per desktop */
    }

    .title-thin-m {
        @include title-thin-m;
        font-size: 2rem; /* Impostato per desktop */
    }

    .paragraph-white {
        @include paragraph-white;
        font-size: 1.2rem; /* Impostato per desktop */
    }

    .btn-primary-to-secondary {
        @include btn-primary-to-secondary;
    }

    /* Media query per dispositivi tablet (max-width: 991px) */
    @media (max-width: 991px) {
        .title-xl {
            font-size: 2.5rem; /* Ridotto per tablet */
        }

        .title-thin-m {
            font-size: 1.75rem; /* Ridotto per tablet */
        }

        .paragraph-white {
            font-size: 1rem; /* Ridotto per tablet */
        }
    }

    /* Media query per dispositivi mobili (max-width: 576px) */
    @media (max-width: 576px) {
        .title-xl {
            font-size: 2rem; /* Ulteriore riduzione per dispositivi mobili */
        }

        .title-thin-m {
            font-size: 1.5rem; /* Ulteriore riduzione per dispositivi mobili */
        }

        .paragraph-white {
            font-size: 0.9rem; /* Ulteriore riduzione per dispositivi mobili */
        }
    }
}
</style>
