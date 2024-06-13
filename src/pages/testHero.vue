<script>

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
                        <i class="fa-solid fa-magnifying-glass" style="color: #20C7DF;"></i>
                    </div>
                </div>
            </header>
        </div>
    </section>
</template>



<style></style>