<script>
export default {
    name: "AppHome"
}
</script>

<template>
    <h1>AppHome di livington</h1>
    <hr>
    <p class="paragraph-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consequatur excepturi
        debitis natus eligendi
        animi accusamus alias eaque cupiditate. Est quas iste unde laboriosam repudiandae dolorem eum recusandae officiis
        placeat?
    </p>
    <p class="paragraph-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consequatur excepturi
        debitis natus eligendi
        animi accusamus alias eaque cupiditate. Est quas iste unde laboriosam repudiandae dolorem eum recusandae officiis
        placeat?
    </p>
    <p class="title-section">title-section
    </p>
    <hr>
    <p class="sub-title-l">sub-title-l
    </p>
    <p class="sub-title-m">sub-title-m
    </p>
    <p class="sub-title-s">sub-title-s
    </p>
    <div style="background-color: black; padding: 1rem;">
        <button class="btn mx-2">click</button>
        <button class="btn-2 mx-1">click</button>
        <button class="btn-3 mx-1">click</button>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/partials/mixin' as *;
@use '../assets/partials/variables' as *;

.btn {
    @include btn-primary-to-secondary
}

.btn-2 {
    @include btn-border-to-white
}

.btn-3 {
    @include btn-primary-to-white
}

.paragraph-thin {
    @include paragraph-thin
}

.paragraph-bold {
    @include paragraph-bold
}

.title-section {
    @include title-section
}

.sub-title-l {
    @include sub-title-l
}

.sub-title-m {
    @include sub-title-m
}

.sub-title-s {
    @include sub-title-s
}
</style>