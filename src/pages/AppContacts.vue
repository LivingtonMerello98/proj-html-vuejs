<script>
import AppForm from '../components/contacts-page-componets/AppForm.vue';
import AppMaps from '../components/contacts-page-componets/AppMaps.vue';

export default {
    name: "AppContacts",
    components: {
        AppForm,
        AppMaps,

    }
}
</script>

<template>
    <AppMaps></AppMaps>
    <AppForm></AppForm>
</template>

<style></style>