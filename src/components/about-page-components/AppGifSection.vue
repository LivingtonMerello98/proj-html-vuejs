<script>
     export default {
    name: "AppGifSection"
    
}
</script>

<template>
    <section class="showcase">
        <video src="/src/components/about-page-components/video/Boat-View-HD.mp4" autoplay loop muted>
        </video>
        <div class="container ">
            <div class="row">
                    <div class="col-6 texts-and-button">
                        <p>With our Help anyone with a love of sailing in his or her heart will be able to put it to practice!</p>
                        <button class="btn-primary-to-white mb-5">
                            Learn More
                        </button>
                    </div>  
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
    @use 'src/assets/partials/mixin' as*;
    @use 'src/assets/partials/variables' as*;

      .btn-primary-to-white {
        @include btn-primary-to-white
    }  
    
    .showcase{
        position: relative;
        right: 0;
        width: 100%;
        height: 100vh;
    }

    .showcase video{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        object-fit: fill;
        max-height: 700px;
    }

    .texts-and-button{
        position: relative;
        z-index: 10;
        padding-top: 150px;
    }
</style>