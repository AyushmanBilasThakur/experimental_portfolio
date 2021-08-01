<template>
    <div class="topbar">
        <div class="icons" v-on:mousedown="(e) => e.stopPropagation()">
            <button class="btn btn-close" v-on:click="emitCloseEvent()">
                
            </button>
            <button class="btn btn-minimize" v-on:click="emitMinimizeEvent()">
                
            </button>
            <button class="btn btn-maximize" v-on:click="emitMaximizeEvent()">

            </button>
        </div>

        <div class="slot_cover">
            {{title}}
        </div>

        <div class="right">
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:"MacWindowTopbar",
    props: ["title", "currentState"],
    methods: {
        emitCloseEvent(){
            this.$emit("close");
        },
        emitMaximizeEvent(){
            this.$emit("maximize");
        },
        emitMinimizeEvent(){
            this.$emit("minimize");
        }
    }
    
})
</script>


<style scoped>
    .topbar{
        width: 100%;
        font-weight: bold;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .topbar:active{
        cursor: grab;
    }

    .light .topbar{
        background-color: #ccc;
        color: #333;
    }

    .dark .topbar{
        background-color: #222;
        color:#ccc;
    }

    .slot_cover{
        padding: 5px 0;
        font-size: 0.8rem;
        margin-right: 60px;
    }

    .icons{
        display: flex;
        height: 100%;
        gap: 5px;
        margin-left: 10px
    }

    .btn{
        display: block;
        margin: 0;
        height: 100%;
        border-radius: 100%;
        width: 10px;
        height: 10px;
        border: none;
    }


    .btn-close{
        background-color:red;
        border: 1px sold #990000;
    }

    .btn-close:hover{
        background-color: #b10202;
    }

    .btn-minimize{
        background-color: #ffc919;
        border: 1px solid #bb8f01;
    }

    .btn-minimize:hover{
        background-color: #a78001;
    }

    .btn-maximize{
        background-color: #3bfb65;
        border: 1px solid #01a525;
    }

    .btn-maximize:hover{
        background-color: #059e26;
    }

</style>