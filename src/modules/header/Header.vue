<template>
    <div class="header">
        {{ title }}
    </div>
</template>

<script>
    export default {
        name: "Header",
        props: {
            title: String
        }
    }
</script>