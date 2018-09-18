<template>
    <div id="app">
        <Header :title="$root.title"/>
    </div>
</template>

<script>
    import Header from "./modules/header/Header";
    export default {
        name: 'app',
        components: {
            Header
        }
    }
</script>