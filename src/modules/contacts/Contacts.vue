<template>
    <div class="contact-container">
        <ContactItem v-for="contact in contacts"
            :first-name="contact.firstName"
            :last-name="contact.lastName"
            :call-times="contact.callTimes"
            :date="contact.callDate.toDateString()"
        />
    </div>
</template>

<script>
    import ContactItem from "./ContactItem";
    import CallTransformer from "../../handlers/CallTransformer"
    export default {
        name: "Contacts",
        mounted () {
            this.contacts = CallTransformer.transformByDate(
                this.$root.callHistory
            )
        },
        components: {
            ContactItem
        },
        data: function () {
            return {
                contacts: []
            }
        }
    }
</script>