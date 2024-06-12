<script>
import AppForm from '../components/contacts-page-componets/AppForm.vue';
import AppMaps from '../components/contacts-page-componets/AppMaps.vue';
import AppFooterShare from '../components/AppFooterShare.vue';
export default {
    name: "AppContacts",
    components: {
        AppForm,
        AppMaps,
        AppFooterShare
    }
}
</script>

<template>
    <AppMaps></AppMaps>
    <AppForm></AppForm>
    <AppFooterShare></AppFooterShare>
</template>

<style></style>