<script>
export default {
  name: "AppAboutUs",
};
</script>

<template>
  <section class="about-us-section">
    <div>
      <h1 class="text-center">About Us</h1>
    </div>
    <div>
      <span class="divider text-center"></span>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="custom-circles-header d-flex align-items-center">
            <i class="fa-solid fa-anchor custom-circle"></i>
            <span>Range of Yachts</span>
          </div>
          <div>
            <p>
              With more than a dozen of different types of yachts available on
              our fleet, a devoted yachtsman of any particular taste will be
              able to pick the boat he or she needs…
            </p>
          </div>
        </div>
        <div class="col-6">
          <div class="custom-circles-header d-flex align-items-center">
            <i class="fa-regular fa-user custom-circle"></i>
            <span>Range of Services</span>
          </div>
          <div>
            <p>
              We offer a real variety of professional services, from the simple
              yachts chartering and corporate events, all the way to yacht
              repairs, upgrades and modifications and maintenance checkups.
            </p>
          </div>
        </div>
        <div class="col-6">
          <div class="custom-circles-header d-flex align-items-center">
            <i class="fa-regular fa-star custom-circle"></i>
            <span>Range of Yachts</span>
          </div>
          <div>
            <p>
              With decades of professional experience in renting, repairing and
              transporting just all kinds of yachts and boats under our belt –
              we can assure you that we are your best choice!
            </p>
          </div>
        </div>
        <div class="col-6">
          <div class="custom-circles-header d-flex align-items-center">
            <i class="fa-regular fa-thumbs-up custom-circle"></i>
            <span>Range of Yachts</span>
          </div>
          <div>
            <p>
              Despite a truly amazing variety of services and yachts that we
              have, it is also truly mesmerizing that our pricing policy is such
              a fair one – affordable to almost any American!
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
}

// .divider{
//     border: solid;
//     border-color: #09C2DD;
//     border-width: 1px;
// }

.custom-circle {
  background-color: $custom-primary-color;
  color: white;
  border-radius: 100%;
  padding: 1rem;
}
</style>
