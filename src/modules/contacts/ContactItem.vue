<template>
    <div class="table contact">
        <div class="cell">
            <div class="name">
                <span class="first-name">{{ firstName }}</span>
                <span class="last-name">{{ lastName }}</span>
                <span>({{ callTimes }})</span>
            </div>
        </div>
        <div class="cell">
            <div class="date">
                <span class="call-time">{{ date }}</span>
                <span class="right-arrow"></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactItem",
        props: {
            firstName: String,
            lastName: String,
            callTimes: String,
            date: String
        }
    }
</script>