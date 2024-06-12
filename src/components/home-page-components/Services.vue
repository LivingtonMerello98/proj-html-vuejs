<script>
export default {
    name: 'Services',
    data() {
        return {
            services: [
                {
                    icon: '<i class="fa-solid fa-anchor"></i>',
                    title: 'Yatch rentals',
                    text: 'With more than two hundred yacht and boat models on our fleet and both the East and the West coasts covered, we are able to offer you the best yacht chartering options.'
                },
                {
                    icon: '<i class="fa-regular fa-user"></i>',
                    title: 'Management',
                    text: 'On par with providing an amazing range of rentals on boats and yachts of all sizes and comfort levels, we will also gladly pick up on providing all kinds of maintenance…'
                },
                {
                    icon: '<i class="fa-solid fa-car"></i>',
                    title: 'Transportation',
                    text: 'Whenever any of our clients wants to try some brand new sailing destination or make a  place of residence move to another water area – there comes the issue of logistics.'
                },
                {
                    icon: '<i class="fa-regular fa-star"></i>',
                    title: 'Yacht Repair',
                    text: 'With decades of professional experience in renting, repairing and transporting just all kinds of yachts and boats under our belt – we can assure you that we are your best choice!'
                },
                {
                    icon: '<i class="fa-regular fa-thumbs-up"></i>',
                    title: 'Yacht Upgrades',
                    text: 'As far as any personally-owned vehicles are concerned, whether we are talking about cars with four wheels, bikes with two wheels or yachts with no wheels, owners do…'
                },
                {
                    icon: '<i class="fa-solid fa-briefcase"></i>',
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
                <div class="col-12 text-center">
                    <h2 class="title-section mb-5">Services</h2>
                </div>
                <hr class="mb-5">
                <div class="content">
                    <div class="row">
                        <!-- card -->
                        <div class="col-4 py-3 mb-5" v-for="(service, index) in services" :key="service.index">
                            <div class="title mb-5">
                                <span class="custom-primary-color" v-html="service.icon"></span>
                                <span class="sub-title-l mx-3">{{ service.title }}</span>
                            </div>
                            <div class="text paragraph-thin">
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

.paragraph-thin {
    @include paragraph-thin
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
    /* Altezza dell'immagine di sfondo */

    /* Aggiungi altre regole di stile secondo necessità */

    .container {
        position: relative;
        /* Assicura che il contenuto rimanga all'interno del parallasse */
        z-index: 2;
        /* Assicura che il contenuto sia sopra l'immagine di sfondo */
    }
}
</style>
