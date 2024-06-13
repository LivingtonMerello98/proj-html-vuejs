<script>
export default {
    name: 'Services',
    data() {
        return {
            services: [
                {
                    icon: '<i class="fa-solid fa-anchor fa-lg"></i>',
                    title: 'Yatch rentals',
                    text: 'With more than two hundred yacht and boat models on our fleet and both the East and the West coasts covered, we are able to offer you the best yacht chartering options.'
                },
                {
                    icon: '<i class="fa-regular fa-user fa-lg"></i>',
                    title: 'Management',
                    text: 'On par with providing an amazing range of rentals on boats and yachts of all sizes and comfort levels, we will also gladly pick up on providing all kinds of maintenance…'
                },
                {
                    icon: '<i class="fa-solid fa-car fa-lg"></i>',
                    title: 'Transportation',
                    text: 'Whenever any of our clients wants to try some brand new sailing destination or make a  place of residence move to another water area – there comes the issue of logistics.'
                },
                {
                    icon: '<i class="fa-regular fa-star fa-lg"></i>',
                    title: 'Yacht Repair',
                    text: 'With decades of professional experience in renting, repairing and transporting just all kinds of yachts and boats under our belt – we can assure you that we are your best choice!'
                },
                {
                    icon: '<i class="fa-regular fa-thumbs-up fa-lg"></i>',
                    title: 'Yacht Upgrades',
                    text: 'As far as any personally-owned vehicles are concerned, whether we are talking about cars with four wheels, bikes with two wheels or yachts with no wheels, owners do…'
                },
                {
                    icon: '<i class="fa-solid fa-briefcase fa-lg"></i>',
                    title: 'Corporate Events',
                    text: 'When it comes to organizing a corporate yacht charter of a Fortune 500 scale for a big crew of people – we will be able to make it flawless.We will exceed your expectations!'
                }
            ]
        }
    },
    mounted() {
        window.addEventListener('scroll', this.parallaxEffect);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.parallaxEffect);
    },
    methods: {
        parallaxEffect() {
            let scrollPosition = window.pageYOffset;
            let parallax = document.querySelector('.parallax');
            parallax.style.backgroundPositionY = scrollPosition * 0.1 + 'px'; // Regola la velocità del parallasse
        }
    }
}
</script>

<template>
    <section class="parallax">
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <h2 class="title-section py-3">Services</h2>
                </div>
                <div class="col-12  my-5" style="background-color: rgba(0, 0, 0, 0.037);">
                    <div class="col-1" style="height: 1px; background-color:#6EC1E4; margin: 0 auto;">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6" v-for="(service, index) in services" :key="index">
                    <div class="service-item mb-5 py-3">
                        <div class="title mb-3">
                            <span class="custom-primary-color" v-html="service.icon"></span>
                            <span class="sub-title-l mx-3" style="color: #222627;">{{ service.title }}</span>
                        </div>
                        <div class="text paragraph-thin m-1">
                            <p>{{ service.text }}</p>
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


.custom-primary-color {
    background-color: $custom-primary-color ;
    color: white;
    border-radius: 100%;
    padding: 1rem;
    font-size: 1.5rem;
}

.title-section {
    @include title-section
}

.sub-title-l {
    @include sub-title-l;
    font-weight: 700;
}

.paragraph-thin {
    @include paragraph-thin;

}

.parallax {
    position: relative;
    background-image: url('https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/bg6.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    height: 100%;
    background-color: #F8F9FE;


    .container {
        position: relative;
        z-index: 2;

    }
}
</style>
