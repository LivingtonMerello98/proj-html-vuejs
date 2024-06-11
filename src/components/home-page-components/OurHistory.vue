<script>
export default {
    name: 'OurHistory'
}
</script>

<template>
    <h1>sono our history</h1>
    <section class="bg-image py-4">
        <div class="container">
            <div class="row">
                <div class="col-6"></div>
                <div class="col-6 py-5">
                    <div class="text col-11">
                        <h1 class="sub-title-s mb-5">Our History</h1>
                        <!-- hr provvisorio -->
                        <hr class="my-5">
                        <p class="paragraph-bold mb-5">
                            Founded by a worldwide-famous yacht racer Alfred Tannenstrick, since its inception back in 1977,
                            this company has been a welcoming harbor for all yachting and sailing enthusiasts, from all
                            across the US!
                        </p>
                        <p class=" paragraph-thin mb-5">
                            We offer a real variety of professional services, from the simple yachts chartering and
                            corporate events, all the way to yacht repairs, upgrades and modifications and maintenance
                            checkups.
                        </p>
                        <p class="paragraph-thin mb-5">
                            With decades of professional experience in renting, repairing and transporting just all kinds of
                            yachts and boats under our belt – we can assure you that we are your best choice!
                        </p>
                        <button class="btn-primary-to-secondary">Read more</button>
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
    background-image: url('https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/bg4.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    .sub-title-s {
        @include sub-title-s
    }

    .btn-primary-to-secondary {
        @include btn-primary-to-secondary
    }

    .paragraph-bold {
        @include paragraph-bold
    }

    .paragraph-thin {
        @include paragraph-thin
    }

}
</style>

