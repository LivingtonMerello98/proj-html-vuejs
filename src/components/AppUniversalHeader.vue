<script>
export default {
    name: "UniversalHeader",
    data(){
        return{
            
        }
    },
}
</script>

<template>

    
    <!-- STRUTTURA BASE
    <div class="container">
        <div class="row">
            <div class="col-12 py-4 bg-primary"></div>
            <div class="col-6 py-4 bg-danger">
                <h1>ciao mondo</h1>
            </div>
        </div>
    </div> -->


<section class="bg-danger">
    <div class="container ">

<!-- INDIRIZZO E NUMERO DI TELEFONO HEADER -->
<div class="row">
</div>
<div class="left-side">
    <div class="address">
        <span><i class="fa-solid fa-location-dot"></i></span>
        <span>7087 Richmond hwy, Alexandria, VA</span>
    </div>
    <div class="telephone-contact">
        <span><i class="fa-solid fa-phone"></i></span>
        <span>800-2345-6789</span>
    </div>
</div>

<!-- ICONE SOCIAL HEADER -->

<div class="right-side">

    <div class="social-icon-circle">
        <i class="fa-brands fa-facebook"></i>
    </div>

    <div class="social-icon-circle">
        <i class="fa-brands fa-twitter"></i>
    </div>

    <div class="social-icon-circle">
        <i class="fa-brands fa-instagram"></i>
    </div>

</div>
</div>
</section>
    

</template>

<style>

    .widget-container{
        background-color: red;
        padding: 10px;
    }
    .widget-container, .left-side, .right-side, 
    .address, .telephone-contact{
        display: flex;
        ;
    }

    .left-side{
        justify-content: flex-start;
        gap: 40px;
        padding-left: 15px;
    }

    .address, .telephone-contact{
        gap: 10px;
    }

    .right-side{
        justify-content: flex-end;
        gap: 35px;
        padding-right: 15px;
    }

</style>