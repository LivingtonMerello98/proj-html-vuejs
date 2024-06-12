<script>
export default {
  name: "AppTestimonials",
};
</script>

<template>
  <section>
    <h2 class="text-center">Testimonials</h2>
    <div>
      <span class="divider text-center"></span>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="container">
            <div class="row">
              <div class="col-6">
                <div class="card-testimonial">
                  <img
                    src="/src/components/about-page-components/testimonials/testimonial1.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="info-testimonials">
                  <span>Yachts Repairs</span>
                  <p>
                    <span
                      >As a yacht owner, after either of my regular maintenance
                      checkups, I oftentimes find it necessary to do this or
                      that kind of a repair. The thing is that I don’t always
                      have enough time (or sometimes the skill), to do all of
                      the repairs all by myself…</span
                    >
                  </p>
                  <span>Albert Winning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="container">
            <div class="row">
              <div class="col-6">
                <div class="card-testimonial">
                  <img
                    src="/src/components/about-page-components/testimonials/testimonial2.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="info-testimonials">
                  <span>Yachts Rentals</span>
                  <p>
                    <span
                      >Having had a real handful of favorite pastimes over the
                      course of my whole adult life, sailing was always front
                      and center in such a list. So, when I found out about this
                      yachts chartering service located just a few miles near my
                      home, I was thrilled!</span
                    >
                  </p>
                  <span>Reginald Stanhow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   <div class="container">
    <div class="row">
      <div class="col-12 text-center py-5">
        <button class="button-view-all">View All</button>
      </div>
    </div>
   </div>
  </section>
</template>

<style lang="scss" scoped>
@use "src/assets/partials/mixin" as *;
@use "src/assets/partials/variables" as *;

.button-view-all{
  @include btn-primary-to-secondary 
  
  }
</style>


