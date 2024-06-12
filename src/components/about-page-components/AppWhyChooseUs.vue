<script>
     export default {
    name: "AppWhyChooseUs"
    
}
</script>

<template>
    <section class="why-ppl-choose-us">
        <h2 class="text-center">Why People Choose Us</h2>
        <div>
            <span class="divider text-center"></span>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="card-counter">
                        <div class="container">
                            <div class="content text-center">
                                <div class="num-counter">5586</div>
                                <div class="card-divider">

                                </div>
                                <div class="card-item">Yachts Available</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-3">
                    <div class="card-counter">
                        <div class="container">
                            <div class="content text-center">
                                <div class="num-counter">3864</div>
                                <div class="card-divider">

                                </div>
                                <div class="card-item">Types of Yachts</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-3">
                    <div class="card-counter">
                        <div class="container">
                            <div class="content text-center">
                                <div class="num-counter">98</div>
                                <div class="card-divider">

                                </div>
                                <div class="card-item">Charters a Year</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-3">
                    <div class="card-counter">
                        <div class="container">
                            <div class="content text-center">
                                <div class="num-counter">11</div>
                                <div class="card-divider">

                                </div>
                                <div class="card-item">Countries Covered</div>
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
    .num-counter{
        color: #09C2DD;
    }

    .card-item{
        font-weight: bold;
    }
</style>