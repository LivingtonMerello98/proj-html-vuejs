<script>
import AppFooterShare from './components/AppFooterShare.vue';

export default {
  components: {
    AppFooterShare
  },
  data() {
    return {
      footerLinks: [
        { label: 'YACHTS', url: '#' },
        { label: 'SERVICES', url: '#' },
        { label: 'RESERVATION', url: '#' },
        { label: 'BLOG', url: '#' },
        { label: 'PRIVACY POLICY', url: '#' },
        { label: 'TERM OF USE', url: '#' }
      ]
    };
  }
}
</script>

<template>
  <router-view></router-view>
  <AppFooterShare :links="footerLinks" />
</template>
