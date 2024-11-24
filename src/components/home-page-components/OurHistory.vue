<script>
export default {
    name: 'OurHistory'
}
</script>

<template>
    <section class="bg-image">
        <div class="container py-5">
            <div class="row">
                <div class="col-6 d-none d-lg-block"></div>

                <div class="col-12 col-sm-12 col-md-12 col-lg-6 py-5">
                    <div class="text col-12 text-center text-lg-start"> <!-- Classi aggiunte per centrare solo su mobile/tablet -->
                        <h1 class="title-section mb-2">Our History</h1>
                        <!-- hr provvisorio -->
                        <div class="col-12 d-flex my-5" style="background-color: rgba(0, 0, 0, 0.068);">
                            <div class="col-2" style="height: 1px; background-color:#6EC1E4 ;"></div>
                        </div>
                        <p class="paragraph-bold mb-5">
                            Founded by a worldwide-famous yacht racer Alfred Tannenstrick, since its inception back in 1977,
                            this company has been a welcoming harbor for all yachting and sailing enthusiasts, from all
                            across the US!
                        </p>
                        <p class="paragraph-thin mb-5">
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

    .title-section {
        @include title-section;
    }

    .btn-primary-to-secondary {
        @include btn-primary-to-secondary;
    }

    .paragraph-bold {
        @include paragraph-bold;
    }

    .paragraph-thin {
        @include paragraph-thin;
    }
}

/* Media query per tablet e mobile */
@media (max-width: 991px) {
    .text-center {
        text-align: center;
    }
    p{
        font-size: 14px;
    }
}
</style>
