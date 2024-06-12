<script>
export default {
    name: 'HeaderAboutContacts',
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
    <section class="bg-header">
        <div class="container py-2">
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
    </section>
</template>

<style lang="scss" scoped>
@use 'src/assets/partials/mixin' as*;
@use 'src/assets/partials/variables' as*;

.bg-header {
    background-color: $custom-secondary-color ;
}

.custom-nav-link {
    color: #fff;
    text-transform: uppercase;
    font-size: 14.4px;
    padding: 27px 23px 22px;
    font-weight: 600;
}
</style>