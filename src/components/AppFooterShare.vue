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
            <div class="row align-items-center">
                <div class="col-md-4 col-12 mb-4 mb-md-0 text-md-left">
                    <img src="https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/logo.png"
                        alt="" class="img-fluid">
                    <p class="fs-">Yacht rentals for people who love <br> sailing across the seas…</p>
                </div>
                <div class="col-md-4 col-12 mb-4 mb-md-0">
                    <div class="row">
                        <div class="col-6">
                            <ul class="text-md-left fw-bolder">
                                <!--slice prende in considerazione dall oggetto 0 all oggetto 3-->
                                <li class="py-2 fw-bold custom-font-size" v-for="(link, index) in links.slice(0, 3)"
                                    :key="index" :href="link.url">
                                    {{ link.label }}
                                </li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul class="text-md-left fw-bolder">
                                <!--slice prende in considerazione dall oggetto 0 all oggetto 3-->
                                <li class="py-2 fw-bold custom-font-size" v-for="(link, index) in links.slice(3, 6)"
                                    :key="index" :href="link.url">
                                    {{ link.label }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-12 text-md-left newsletter py-5">
                    <h2 class="fw-bolder py-2 fw-bold fs-3">Newsletter</h2>
                    <form class="form-inline justify-content-center">
                        <div class="form-group mb- d-flex">
                            <input type="email" v-model="email" class="form-control" placeholder="Enter your e-mail"
                                required>
                            <button type="submit" class="btn-primary-to-secondary fw-bold">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <section class="bt-footer py-3 bg-dark text-light">
            <div class="container">
                <div class="row">
                    <div
                        class="col-md-6 col-12 d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-start">
                        <span class="rights mr-md-2 text-size-lg">&copy; Zemez. All rights reserved.</span>
                        <a href="#" class="text-light mx-2 text-size-lg"> | Privacy Policy</a>
                        <a href="#" class="text-light text-size-lg"> | Terms of Use</a>
                    </div>
                    <div
                        class="col-md-6 col-12 d-flex justify-content-center justify-content-md-end align-items-center mt-3 mt-md-0">
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
    color: blue;
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

.rights {
    color: white;
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
}
</style>
