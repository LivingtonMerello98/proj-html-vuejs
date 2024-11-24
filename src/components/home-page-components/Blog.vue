<script>
export default {
    name: 'Blog',
    data() {
        return {
            posts: [
                {
                    image: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/post1-1-570x450.jpg',
                    data: 'December 16, 2020',
                    title: 'Is Greece a Good Choice for Yacht Sailing?'
                },
                {
                    image: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/post2-1-570x450.jpg',
                    data: 'December 16, 2020',
                    title: 'Seattle Yachts and Northwest Yachts Announce Merger'
                },
                {
                    image: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/post3-1-570x450.jpg',
                    data: 'December 16, 2020',
                    title: 'Video: Superyacht ‘Project Jupiter’ Launched By Lurssen'
                }
            ]
        }
    }
}
</script>

<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-12 text-center py-5">
                <h2 class="title-section mb-2">Yachtsmen's Blog</h2>

                <div class="col-12  my-5" style="background-color: rgba(0, 0, 0, 0.037);">
                    <div class="col-1" style="height: 1px; background-color:#6EC1E4; margin: 0 auto;">
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-12 text-center mb-4" v-for="(post, index) in posts" :key="index">
                <div class="img-content">
                    <img :src="post.image" :alt="post.title" class="post-img mb-4">
                </div>
                <p class="thin-font mb-4">{{ post.data }}</p>
                <h4 class="sub-title-s mb-4">{{ post.title }}</h4>
            </div>
            <div class="col-12 mb-5 text-center">
                <button class="btn-primary-to-secondary">View all Blog Posts</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use 'src/assets/partials/mixin' as*;
@use 'src/assets/partials/variables' as*;

.sub-title-s {
    @include sub-title-s;
}

.thin-font {
    font-size: 13px;
    font-weight: 300;
}

.title-section {
    @include title-section;
}

.post-img {
    width: 100%;
    height: auto;
    max-width: 500px;
    max-height: 500px;
    object-fit: cover;
}

.btn-primary-to-secondary {
    @include btn-primary-to-secondary;
}

/* Media query per tablet (max-width: 991px) */
@media (max-width: 991px) {
    .title-section {
        font-size: 2.5rem;
    }

    .sub-title-s {
        font-size: 1.25rem; 
    }

    .thin-font {
        font-size: 12px; 
    }
}

/* Media query per dispositivi mobili (max-width: 576px) */
@media (max-width: 576px) {
    .title-section {
        font-size: 2rem;
    }

    .sub-title-s {
        font-size: 1rem;
    }

    .thin-font {
        font-size: 11px; 
    }
}
</style>
