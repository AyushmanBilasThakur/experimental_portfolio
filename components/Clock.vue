<template>
    <div>
        <span><strong>My Time:</strong> {{date}} IST</span>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import moment from "moment";
export default Vue.extend({
    name:"Clock",
    data() {
        return({
            date: "",
        });
    },

    mounted(){
        let gthis = this;
        this.clockSetTime();
        window.setInterval(() => gthis.clockSetTime(), 1000)
    },

    methods: {
        clockSetTime() {
            this.date = moment().utcOffset("+05:30").format("Do MMMM, dddd, YYYY | hh:mm a");
        }
    }
})
</script>

<style scoped>
    div{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    span{
        font-size: 0.7rem;
        margin-right: 0.4em;
    }
</style>