<script>
export default {
  name: "AppTestimonials",
  data() {
    return {
      testimonials: [
        {
          url: "https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/person0.jpg",
          name: "- Albert Winning",
          role: "Yatch Repairs",
          desc: "As a yacht owner, after either of my regular maintenance checkups, I oftentimes find it necessary to do this or that kind of a repair. The thing is that I don’t always have enough time (or sometimes the skill), to do all of the repairs all by myself…",
        },
        {
          url: "https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/person01.jpg",
          name: "- Reginald Stanhow",
          role: "Yatch Rentals",
          desc: "Having had a real handful of favorite pastimes over the course of my whole adult life, sailing was always front  and center in such a list. So, when I found out about this yachts chartering service located just a few miles near my home, I was thrilled!",
        },
      ],
    };
  },
};
</script>
<template>
  <section>
    <h2 class="text-center py-5">Testimonials</h2>
    <div class="container">
      <hr class="mb-5 py-5" />
      <div class="row">
        <div class="col-md-6 d-flex " v-for="testimonial in testimonials">
          <div class="card-testimonial">
<<<<<<< HEAD
            <img :src="testimonial.url" alt="" />
=======
            <img :src="testimonial.url" alt="" class="img-testimonial"/>
>>>>>>> 7fe4c1792accd2dca6a306ba0c1e08f733d142a4
          </div>
          <div class="info-testimonials mb-5 px-4">
            <span class="role-testimonial">{{ testimonial.role }}</span>
            <p class="mb-3">
              <span>{{ testimonial.desc }}</span>
            </p>
            <p class="name-testimonial mb-3">{{ testimonial.name }}</p>
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

.button-view-all {
  @include btn-primary-to-secondary;
}

.name-testimonial {
  color: #09c2dd;
  font-weight: bold;
}

h2 {
  font-weight: bold;
  font-size: $custom-title-section-size;
}

.role-testimonial {
  font-weight: bold;
  font-size: $custom-sub-title-m;
}

.img-testimonial{
  max-height: 300px;
}
</style>
