<script>
     export default {
    name: "AppWhyChooseUs",
    data() {
    return {

 };
 },


}
</script>

<template>
    <section class="why-ppl-choose-us py-5">
        <h2 class="text-center py-5">Why People Choose Us</h2>
        <div class="container">
            <hr class="mb-5">
            <div class="row">
                <div class="col-3">
                    <div class="card-counter">
                        <div class="container">
                            <div class="content text-center">
                                <div class="num-counter" data-val="5586">0000</div>
                                <hr class="mb-5 card-divider">
                                <div class="card-item">Yachts Available</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-3">
                    <div class="card-counter">
                        <div class="container">
                            <div class="content text-center">
                                <div class="num-counter" data-val="3864">0000</div>
                                <hr class="mb-5 card-divider">
                                <div class="card-item">Types of Yachts</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-3">
                    <div class="card-counter">
                        <div class="container">
                            <div class="content text-center">
                                <div class="num-counter" data-val="98">00</div>
                                <hr class="mb-5 card-divider">
                                <div class="card-item">Charters a Year</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-3">
                    <div class="card-counter">
                        <div class="container">
                            <div class="content text-center">
                                <div class="num-counter" data-val="11">00</div>
                                <hr class="mb-5 card-divider">
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
        font-weight: bold;
        font-size: $custom-title-m
    }

    h2 {
        font-weight: bold;
        font-size: $custom-title-section-size
    }

    .card-divider{
        color: #09C2DD;
    }

    .card-item{
        font-weight: bold;
        font-size: $custom-sub-title-m
    }
</style>