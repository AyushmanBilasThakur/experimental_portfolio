<template>
    <div class="cont">
        <div class="work-card">
            <h3 class="role">Fullstack Web Developer - Intern</h3>
            <p class="sub-heading">Kesowa Ventures Pvt. Ltd.</p>
            <p class="sub-heading">September 2020 - December 2020</p>

            <p class="description">As a fullstack web developer at Kesowa I worked with technologies like Vue.js and Express.js to build the frontend and the backend of their admin facing website respectively</p>
      
        </div>
         <div class="work-card">
            <h3 class="role">Software Developer - Intern</h3>
            <p class="sub-heading">Dressworm</p>
            <p class="sub-heading">January, 2020 - March, 2020</p>

            <p class="description">Worked on building an e-commerce platform with vue.js and firebase</p>
      
        </div>
         <div class="work-card">
            <h3 class="role">Front-End Web Developer(Internship)</h3>
            <p class="sub-heading">Adben Industries Pvt. Ltd.</p>
            <p class="sub-heading">November 2019 - December 2019</p>

            <p class="description">Based on the Django backend made a responsive frontend for the website</p>
      
        </div>
         <div class="work-card">
            <h3 class="role">Content Writer</h3>
            <p class="sub-heading">Agatton</p>
            <p class="sub-heading">December 2018 - August 2019</p>

            <p class="description">Wrote articles about latest tech news and topics.</p>
      
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "InternshipPage"
})
</script>

<style scoped>
    .cont{
        width: 90%;
        margin: 10px auto;
        overflow-y:auto;
    }

    .work-card{
        padding: 10px;
        border: 0.5px solid black;
        border-radius: 10px;
        margin-bottom: 10px;
    }

    .sub-heading{
        margin-top: 3px;
        margin-bottom: 10px;
        font-size: 0.8rem;
    }
</style>