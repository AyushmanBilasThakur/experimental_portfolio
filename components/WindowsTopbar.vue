<template>
    <div class="topbar">
        <div class="slot_cover">
            {{title}}
        </div>

        <div class="icons" v-on:mousedown="(e) => e.stopPropagation()">
            <button class="btn btn-transparent btn-close" v-on:click="emitCloseEvent()">
                <i class="fas fa-times"></i>
            </button>
            <button class="btn btn-transparent btn-maximize" v-on:click="emitMaximizeEvent()">
                <i v-if="currentState == 'window'" class="fas fa-window-maximize"></i>
                <i v-else class="fas fa-window-restore"></i>
            </button>
            <button class="btn btn-transparent btn-minimize" v-on:click="emitMinimizeEvent()">
                <i class="far fa-window-minimize"></i>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:"WindowsTopBar",
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
        padding: 5px 10px;
    }

    .icons{
        display: flex;
        flex-direction: row-reverse;
        height: 100%;
    }

    .btn{
        display: block;
        padding: 6px 10px;
        margin: 0;
        height: 100%;
    }

    .btn-transparent{
        background: none;
        border: none;
        outline: none;
        cursor: default;
        transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
    }

    .dark .btn-transparent{
        color: white;
    }

    .btn-close{
        color: red !important;
    }

    .btn-close:hover{
        color: white !important;
        background-color: red;
    }

    .btn-minimize:hover, .btn-maximize:hover{
        color: white;
        background-color: #777;
    }

</style>