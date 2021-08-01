<template>
    <div class="cont">
        <div class="card">
            <h3>Expense Tracker</h3>
            <p>
                Expense Tracker is a javascript based application made to keep a recode of your earning and expense.
            </p>
            <div class="links">
                <a target="_blank" href="https://www.youtube.com/watch?v=ERdFH7cUCdQ">
                    <i class="fab fa-youtube"></i> Youtube
                </a>
                <a target="_blank" href="https://github.com/AyushmanBilasThakur/expense_tracker">
                    <i class="fab fa-github"></i> Github
                </a>
                <a target="_blank" href="https://transaction-list.netlify.app/">
                    <i class="fas fa-globe"></i> Website
                </a>
            </div>
        </div>

        <div class="card">
            <h3>Odd n Even</h3>
            <p>
                Odd and Even is a Javascript based name where you have to press buttons and tell if a number is odd or even. But the twist is the buttons swap place randomly
            </p>
            <a target="_blank" href="https://github.com/AyushmanBilasThakur/Odd_N_Even">
                <i class="fab fa-github"></i> Github
            </a>
            <a target="_blank" href="https://oddneven.netlify.app/">
                <i class="fas fa-globe"></i> Website
            </a>
        </div>

        <div class="card">
            <h3>TapTimer</h3>
            <p>
                TapTimer is a javascriprt based timer made in Angular with my senior and a junior
            </p>
            <a target="_blank" href="https://productivity-stopwatch.netlify.app/">
                <i class="fas fa-globe"></i> Website
            </a>
        </div>

        <div class="card">
            <h3>Quotesapp</h3>
            <p>
                QuotesApp is an app where you can share your own creative and
innovative quotes. This is made with angular and firebase
            </p>
            <a target="_blank" href="https://ayushmanbilasthakur.github.io/QuotesApp/">
                <i class="fas fa-globe"></i> Website
            </a>
        </div>
        
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>

<style scoped>
    .cont{
        width: 90%;
        margin: 10px auto;
        overflow-y:auto;
    }

    .card{
        padding: 10px;
        border: 0.5px solid black;
        border-radius: 10px;
        margin-bottom: 10px;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
</style>