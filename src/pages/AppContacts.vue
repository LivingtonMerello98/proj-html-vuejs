<script>
import AppForm from '../components/contacts-page-componets/AppForm.vue';
import AppMaps from '../components/contacts-page-componets/AppMaps.vue';
import HeaderAboutContacts from '../components/HeaderAboutContacts.vue';
import AppFooterShare from '../components/AppFooterShare.vue';
import AppUniversalHeader from '../components/AppUniversalHeader.vue';

export default {
    name: "AppContacts",
    components: {
        AppForm,
        AppMaps,
        AppFooterShare,
        HeaderAboutContacts,
        AppUniversalHeader

    }
}
</script>

<template>
    <AppUniversalHeader />
    <HeaderAboutContacts />
    <AppMaps></AppMaps>
    <AppForm></AppForm>
    <AppFooterShare />
</template>

<style></style>