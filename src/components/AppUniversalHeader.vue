<script>
export default {
  name: "UniversalHeader",
  data() {
    return {};
  },
};
</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-8 py-2 d-flex">

          <!-- INDIRIZZO E NUMERO DI TELEFONO HEADER -->

          <div class="address">
            <span>
              <i class="fa-solid fa-location-dot map-location-icon"></i>
            </span>
            <span class="mx-3 custom-font-size">7087 Richmond hwy, Alexandria, VA</span>
          </div>
          <div class="telephone-contact mx-5">
            <span><i class="fa-solid fa-phone phone-icon"></i></span>
            <span class="mx-3 custom-font-size">800-2345-6789</span>
          </div>
        </div>
        <div class="col-4 d-flex align-items-center justify-content-end">
          <div class="social-icon-circle ">
            <a href=""><i class="fa-brands fa-facebook "></i></a>
            <a href=""><i class="fa-brands fa-twitter mx-4"></i></a>
            <a href=""><i class="fa-brands fa-instagram "></i></a>
          </div>
        </div>


      </div>
    </div>

  </section>
</template>

<style lang="scss" scoped>
@use "src/assets/partials/variables" as *;

section {
  background-color: white;
}

.map-location-icon {
  color: $custom-primary-color;
}

.phone-icon {
  color: $custom-primary-color;
}

a {
  text-decoration: none;
  color: #849296;

  :hover {
    color: #20C7DF;
  }
}

.custom-font-size {
  font-size: 14px;
}
</style>
