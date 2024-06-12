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
        <div class="col-8 py-3 d-flex">

          <!-- INDIRIZZO E NUMERO DI TELEFONO HEADER -->

          <div class="address">
            <span>
                <i class="fa-solid fa-location-dot map-location-icon"></i
              ></span>
              <span>7087 Richmond hwy, Alexandria, VA</span>
          </div> 
          <div class="telephone-contact mx-5">
            <span><i class="fa-solid fa-phone phone-icon"></i></span>
              <span>800-2345-6789</span>
          </div>
        </div>
          <div class="col-4 py-3">
            <div class="social-icon-circle d-flex justify-content-end gap-3">
              <a href=""><i class="fa-brands fa-facebook"></i></a>
             <a href=""><i class="fa-brands fa-twitter"></i></a>
             <a href=""><i class="fa-brands fa-instagram"></i></a> 
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

a{
  text-decoration: none;
  color: #849296;

  :hover{
    color: #20C7DF;
  }
}
</style>
