<script>
export default {
    name: 'OurHistory'
}
</script>

<template>
    <h1>sono our history</h1>
    <section class="bg-image">
        <div class="container">
            <div class="row">
                <div class="col-6  py-4"></div>
                <div class="col-6 bg-primary">
                    <h1 class="sub-title-s">lorem ipsum</h1>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.bg-image {
    background-image: url('https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/bg4.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    .sub-title-s {
        @include sub-title-s
    }

}
</style>

