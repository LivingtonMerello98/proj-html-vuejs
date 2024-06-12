<script>

 export default {
    name: "HeaderAboutContacts"
    
}
</script>

<template>

<div class="header-about-contacts py-5">
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex">
                <div class="logo-header">
                    <a href="#">
                        <img src="/src/components/about-page-components/logo/logo.webp" alt="">
                    </a> 
                </div>
                <div class="nav-pages">
                    <ul class="d-flex">
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Yachts</a>
                        </li>
                        <li>
                            <a href="#">Reservations</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Contacts</a>
                        </li>
                    </ul>
                </div>
                <div class="research">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>

        </div>
    </div>
    </div>
    
    <!-- HOME | ABOUT -->
     
    <div class="home-about py-3">
        <div class="container">
            <span>
                <a href="#">Home</a>
            </span>
            <span class="vl">
                |
            </span>
            <span>
                <a href="#">About</a>
            </span>
            <span>
                <a href="#">Contacts</a>
            </span>
        </div>
    </div>

</template>

<style lang="scss" scoped>

@use 'src/assets/partials/variables' as *;

    .header-about-contacts{
        width: 100%;
        background-color: $custom-secondary-color
    }

    .logo-header{
        width: 300px;
        height: auto;
    }

    .nav-pages{
        color: white;
    }

    .research{
        color: $custom-color-title-section
    }

    a{
        text-decoration: none;
        color: currentColor;
    }
    
</style>