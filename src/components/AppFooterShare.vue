<script>
export default {
    name: 'AppFooterShare',
    props: {
        links: {
            type: Array,
            required: true,
            default: () => []
        }
    },
};
</script>

<template>
    <footer class="color-share">
        <div class="container py-5">
            <div class="row mb-5 py-5">

                <div class="col-md-4 col-4 mb-4 mb-md-0  d-flex align-items-center ">

                    <div class="logo-slogan">
                        <img src="https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/logo.png"
                            alt="" class="img-fluid">
                        <p class="fs-">Yacht rentals for people who love <br> sailing across the seas…</p>
                    </div>

                </div>

                <div class="col-md-4 col-4 mb-4 mb-md-0">
                    <div class="row">
                        <div class="col-6">
                            <ul>
                                <!--slice prende in considerazione dall oggetto 0 all oggetto 3-->
                                <li class="mb-3 custom-font-size" v-for="(link, index) in links.slice(0, 3)" :key="index"
                                    :href="link.url">
                                    {{ link.label }}
                                </li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul>
                                <!--slice prende in considerazione dall oggetto 0 all oggetto 3-->
                                <li class="mb-3 custom-font-size" v-for="(link, index) in links.slice(3, 6)" :key="index"
                                    :href="link.url">
                                    {{ link.label }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 col-12 text-md-left newsletter">
                    <h2 class="form-title mb-3">Newsletter</h2>
                    <form class="form-inline">
                        <div class="form-group mb- d-flex">
                            <input type="email" v-model="email" class="form-control" placeholder="Enter your e-mail"
                                required>
                            <button type="submit" class="btn-primary-to-secondary fw-bold">Subscribe</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
        <section class="bt-footer py-3">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-12 d-flex justify-content-md-start py-1">
                        <p class="text-white mr-md-2 ">&copy; Zemez. <span style="color: rgb(134, 132, 132);"> All rights
                                reserved.</span></p>
                        <p class="text-white mx-2 mr-md-2"> | Privacy Policy</p>
                        <p class="text-white mr-md-2"> | Terms of Use</p>
                    </div>
                    <div class="col-md-6 col-12 d-flex justify-content-center justify-content-md-end mt-md-0">
                        <a href="#" class="text-light mx-2"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#" class="text-light mx-2"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="text-light mx-2"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </section>
    </footer>
</template>

<style lang="scss" scoped>
@use 'src/assets/partials/mixin' as *;
@use 'src/assets/partials/variables' as *;

.color-share a:hover {
    color: $custom-primary-color;
}

.color-share {
    background-color: #f5f5f5;
}

a {
    text-decoration: none;
    color: black;
}

.bt-footer {
    background-color: #222627;
}


.newsletter input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.btn-primary-to-secondary {
    @include btn-primary-to-secondary;
}

.custom-font-size {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.8em;
}

.form-title {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.58em;
}

p {
    font-size: 12px;
    text-transform: uppercase;
    line-height: 1.2em;
}
</style>
