<script>
export default {
    name: 'Services',

    data() {
        return {
            services: [
                {
                    title: 'Yatch rentals',
                    text: 'With more than two hundred yacht and boat models on our fleet and both the East and the West coasts covered, we are able to offer you the best yacht chartering options.'
                },
                {
                    title: 'Management',
                    text: 'On par with providing an amazing range of rentals on boats and yachts of all sizes and comfort levels, we will also gladly pick up on providing all kinds of maintenance…'
                },
                {
                    title: 'Transportation',
                    text: 'Whenever any of our clients wants to try some brand new sailing destination or make a  place of residence move to another water area – there comes the issue of logistics.'
                },
                {
                    title: 'Yacht Repair',
                    text: 'With decades of professional experience in renting, repairing and transporting just all kinds of yachts and boats under our belt – we can assure you that we are your best choice!'
                },
                {
                    title: 'Yacht Upgrades',
                    text: 'As far as any personally-owned vehicles are concerned, whether we are talking about cars with four wheels, bikes with two wheels or yachts with no wheels, owners do…'
                },
                {
                    title: 'Corporate Events',
                    text: 'When it comes to organizing a corporate yacht charter of a Fortune 500 scale for a big crew of people – we will be able to make it flawless.We will exceed your expectations!'
                }
            ]
        }
    }
}
</script>

<template>
    <section class="bg-image">
        <div class="container py-5">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="title-section mb-5">Services</h2>
                </div>
                <hr class="mb-5">
                <div class="content">
                    <div class="row">
                        <!-- card -->
                        <div class="col-4 py-3" v-for="(service, index) in services">
                            <div class="title mb-3">
                                <span class="custom-primary-color">
                                    <i class="fa-solid fa-anchor"></i>
                                </span>
                                <span class="sub-title-l">{{ service.title }}</span>
                            </div>
                            <div class="text">
                                <p>{{ service.text }}</p>
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

.bg-image {
    background-image: url('https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/bg6.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    .custom-primary-color {
        background-color: $custom-primary-color ;
        color: white;
        border-radius: 100%;
        padding: 1rem;
    }

    .title-section {
        @include title-section
    }

    .sub-title-l {
        @include sub-title-l
    }

}
</style>