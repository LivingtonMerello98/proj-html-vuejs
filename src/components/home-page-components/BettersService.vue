<script>
export default {
    name: 'BetterService'
}

</script>

<template>
    <section class="bg-image">
        <div class="container py-5">
            <div class="row">
                <div class="col-12 py-5">
                    <div class="content mb-5">
                        <div class="text text-center py-5">
                            <h2 class="title-m mb-5">Yacht Charters, Repairs<br>& Transportation, US-wide!</h2>
                            <button class="btn-primary-to-white mb-5">More Details</button>
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
    background-image: url('https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/bg5.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;

    .title-m {
        @include title-m;
        line-height: 1.25;
        letter-spacing: 0.2rem;

    }

    .btn-primary-to-white {
        @include btn-primary-to-white
    }
}
</style>