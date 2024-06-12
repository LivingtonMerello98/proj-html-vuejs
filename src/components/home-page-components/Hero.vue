<script>
export default {
    name: 'Hero',
    data() {
        return {
            logo: 'https://web.archive.org/web/20221227095619im_/https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2019/09/logo.png',

            navLinks: [
                {
                    navItem: 'about',
                    url: ''
                },
                {
                    navItem: 'services',
                    url: ''
                },
                {
                    navItem: 'yachts',
                    url: ''
                },
                {
                    navItem: 'reservation',
                    url: ''
                },
                {
                    navItem: 'blog',
                    url: ''
                },
                {
                    navItem: 'contacts',
                    url: ''
                }
            ]
        }
    }
}

</script>

<template>
    <section class="bg-image">
        <div class="container py-3">
            <header>
                <div
                    class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 ">
                    <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <img :src="logo" alt="logo">
                    </a>

                    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0" v-for="(link, index) in navLinks"
                        :key="link.index">
                        <li class=""><a href="#" class="nav-link px-2 custom-nav-link">{{ link.navItem }}</a></li>
                    </ul>

                    <div class="col-md-3 text-end">
                        <i class="fa-solid fa-magnifying-glass" style="color: #ffffff;"></i>
                    </div>
                </div>
            </header>
        </div>
        <div class="container py-5">
            <div class="row">
                <div class="col-12">
                    <div class="card-content py-5">
                        <div class="text-content">
                            <h2 class="title-l">QuickWind</h2>
                            <p class="font-custom mb-5">all kinds of boats, yacht charters and sailing destinations
                                <br>for hobbyist yachtsmen and women!
                            </p>
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
    height: 100;
    display: flex;
    flex-direction: column;

    .title-l {
        @include title-l;
        line-height: 1.5em;
    }

    .custom-sub-title-s {
        @include sub-title-s
    }

    .btn-border-to-white {
        @include btn-border-to-white
    }

    .font-custom {
        font-size: $custom-sub-title-m ;
        font-weight: 400;
        color: white;
        line-height: 1.4em;
    }

    .custom-nav-link {
        color: #fff;
        text-transform: uppercase;
        font-size: 14.4px;
        padding: 27px 23px 22px;
        font-weight: 600;
    }
}
</style>