<template>
    <div class="contact-container">
        <ContactItem
            first-name="john"
            last-name="doe"
            call-times="3"
            date="2018-09-18"
        />
    </div>
</template>

<script>
    import ContactItem from "./ContactItem";
    export default {
        name: "Contacts",
        components: {ContactItem}
    }
</script>