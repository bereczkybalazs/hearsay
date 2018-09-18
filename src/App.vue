<template>
    <div id="app">
        <Header :title="$root.title"/>
        <Contacts/>
    </div>
</template>

<script>
    import Header from "./modules/header/Header";
    import Contacts from "./modules/contacts/Contacts";
    export default {
        name: 'app',
        components: {
            Contacts,
            Header
        }
    }
</script>