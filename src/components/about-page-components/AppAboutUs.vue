<script>
export default {
  name: "AppAboutUs",
  data() {
    return {
      aboutUs: [
        {
          icon: '<i class="fa-solid fa-anchor fa-2x"></i>',
          name: 'Range of Yachts',
          paragraph: 'With more than a dozen of different types of yachts available on our fleet, a devoted yachtsman of any particular taste will be able to pick the boat he or she needs…'
        },
        {
          icon: '<i class="fa-regular fa-user fa-2x"></i>',
          name: 'Range of Services',
          paragraph: 'We offer a real variety of professional services, from the simple yachts chartering and corporate events, all the way to yacht repairs, upgrades and modifications and maintenance checkups.'
        },
        {
          icon: '<i class="fa-regular fa-star fa-2x"></i>',
          name: 'Outstanding Quality',
          paragraph: 'With decades of professional experience in renting, repairing and transporting just all kinds of yachts and boats under our belt – we can assure you that we are your best choice!'
        },
        {
          icon: '<i class="fa-regular fa-thumbs-up fa-2x"></i>',
          name: 'Fair Pricing',
          paragraph: 'Despite a truly amazing variety of services and yachts that we have, it is also truly mesmerizing that our pricing policy is such a fair one – affordable to almost any American!'
        },
      ]
    }
  }
};
</script>

<template>
  <section class="about-us-section">
    <div class="container">
      <div class="row">
        <div class="col-12 py-5">
          <h1 class="text-center custom-font">About Us</h1>
          <div class="col-12  my-5" style="background-color: rgba(0, 0, 0, 0.037);">
            <div class="col-1" style="height: 1px; background-color:#6EC1E4; margin: 0 auto;">
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 py-5" v-for="us in aboutUs">
          <div class="custom-circles-header d-flex align-items-center">
            <div class="custom-circle" v-html="us.icon"></div>
            <span class="px-5">{{ us.name }}</span>
          </div>
          <div>
            <p class="py-4">
              {{ us.paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "src/assets/partials/mixin" as *;
@use "src/assets/partials/variables" as *;

.about-us-section {
  background-image: url("https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/bg6.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

span {
  font-weight: bold;
  font-size: $custom-sub-title-l
}

.custom-font {
  font-weight: 700;
  line-height: 1.25em;
  font-size: $custom-title-section-size
}

.custom-circle {
  background-color: $custom-primary-color;
  color: white;
  border-radius: 100%;
  padding: 30px;
}
</style>
