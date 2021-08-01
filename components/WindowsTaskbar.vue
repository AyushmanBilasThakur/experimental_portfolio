<template>
    <div class="bottom-bar">
        <div class="left-side">
            <div class="windows_key">
                <button v-on:click="emitWinEvent" class="win-button">
                    <i class="fab fa-windows"></i>
                    <span class="tooltip">Go back Home</span>
                </button>
            </div>

            <div class="icons">
                <a class="win-button" href="/Ayushman Bilas Thakur.pdf" target="_blank">
                    <i class="fas fa-file-download"></i>
                    <span class="tooltip">Download Resume</span>
                </a>
                <button class="win-button" v-on:click="emitProjectsEvent">
                    <i class="fas fa-tools"></i>
                    <span class="tooltip">Projects</span>
                </button>
                <button class="win-button" v-on:click="emitWorksEvent">
                    <i class="fas fa-briefcase"></i>
                    <span class="tooltip">Works</span>
                </button>
                <button class="win-button" v-on:click="emitAboutEvent">
                    <i class="fas fa-user"></i>
                    <span class="tooltip">About</span>
                </button>
            </div>
        </div>

        <div class="right-side">
            <ThemeToggler />
            <Clock />
        </div>
    </div>    
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    methods: {
        emitWinEvent() {
            this.$emit("windowsButtonClick");
        },

         emitDownloadEvent() {
            this.$emit("downloadButtonClick");
        },

        emitProjectsEvent(){
            this.$emit("projectsButtonClick");
        },

        emitWorksEvent(){
            this.$emit("worksButtonClick");
        },

        emitAboutEvent(){
            this.$emit("aboutButtonClick");
        }
    }
})
</script>

<style scoped>
    .light .bottom-bar{
        background-color: #fdfdfd;
    }

    .dark .bottom-bar{
        background-color: rgba(0,0,0, 0.8);
    }

    .dark .bottom-bar button{
        color: white;
    }

    .bottom-bar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        bottom: 0;
        left: 0;
        right:0;
        z-index: 999;
    }

    .left-side,
    .right-side{
        display: flex;
        align-items: center;
        grid-gap: 10px;
    }

    a{
        color: inherit;
    }
    .win-button{
        display: block;
        height: 100%;
        padding: 10px;
        border: none;
        outline: none;
        background-color: transparent;
        transition: background-color 0.3s ease-in-out;
        cursor: pointer;
        position: relative;
        width: fit-content;
        font-size: 1rem;
    }

    .win-button:hover{
        background-color: rgba(200, 200, 200, 0.7);
    }


    .dark .win-button:hover{
        background-color: rgba(70, 70, 70, 0.7);
    }


.tooltip{
  visibility: hidden;
  width: 80px;
  bottom: 100%;
  left: 60%;
  margin-left: -20px;
  font-size: 10px !important;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.win-button:hover .tooltip {
  visibility: visible;
}

.tooltip::after {
  content: " ";
  position: absolute;
  top: 100%; /* At the bottom of the tooltip */
  left: 30%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}

.icons{
    display: flex;
}
</style>