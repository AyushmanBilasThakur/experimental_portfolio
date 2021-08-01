<template>
    <div @click="emitClickEvent" ref="window" id="window" :style="{width: `${width}px`, height: `${height}px`, zIndex: `${zIndex}`}" :class="`main ${theme} ${currentState}`">
        <div v-on:mousedown="(e) => drag(e)">
            <mac-window-topbar 
                :title="title" 
                :currentState="this.currentState"
                v-on:close="emitCloseEvent()"
                v-on:maximize="emitMaximizeEvent()"
                v-on:minimize="emitCloseEvent()"
            />
        </div>

        
        <div class="content">
            <slot/>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MacWindowTopbar from './MacWindowTopbar.vue';

export default Vue.extend({
    name: "Windows",
    props: ["initialWidth", "initialHeight", "theme", "title", "zIndex"],
    components: {
        MacWindowTopbar
    },
    data(){
        return ({
            width: this.initialWidth || 480,
            height: this.initialHeight || 200,
            currentState: "window",
            lastX: "",
            lastY: ""
        })
    },
    watch: {
        width: function(newVal, oldVal){
            if(newVal > window.innerWidth * 0.8){
                newVal = window.innerWidth * 0.8
            }
            if(newVal < 200){
                newVal = 200
            }
        },
        height: function(newVal, oldVal){
            if(newVal > window.innerHeight * 0.8){
                newVal = window.innerHeight * 0.8
            }
            if(newVal < 200){
                newVal = 200
            }
        }
    },
    methods: {
        drag(el: any) {
            window.addEventListener("mousemove", mousemove);
            window.addEventListener("mouseup", mouseup);
            

            let prevX = el.clientX;
            let prevY = el.clientY;

            let gthis = this;

            function mousemove(e: any) {
                let newX = prevX - e.clientX;
                let newY = prevY - e.clientY;
                
                let rect:any =  gthis.$refs["window"];
                
                let box = rect.getBoundingClientRect();

                let x = box.left - newX
                let y = box.top - newY

                if(x < 0) {
                    x = 0
                } if(x > (window.innerWidth - gthis.width)){
                    x = window.innerWidth - gthis.width
                }

                if(y < 30) {
                    y = 30
                } if(y > (window.innerHeight - gthis.height)){
                    y = window.innerHeight - gthis.height
                }

                rect.style.left = x + "px"
                rect.style.top = y + "px"

                prevX = e.clientX;
                prevY = e.clientY;

            }

            function mouseup(){
                window.removeEventListener("mousemove", mousemove);
                window.removeEventListener("mouseup", mouseup);
            }
        },
        emitCloseEvent() {
            this.$emit("closeWindow");
        },
        emitMaximizeEvent() {
            let rect:any =  this.$refs["window"];
            let box = rect.getBoundingClientRect();
            if(this.width != window.innerWidth && this.height != window.innerHeight){
                this.width = window.innerWidth;
                this.height = window.innerHeight - 30;

                

                this.lastX = rect.style.left
                this.lastY = rect.style.top



                rect.style.top = 30 + "px"
                rect.style.left = 0
                
                this.currentState = "max"
            } else {

                rect.style.top = this.lastY
                rect.style.left = this.lastX
                this.width =  this.initialWidth || 480
                this.height =  this.initialHeight || 200
                this.currentState = "window"
            }
            console.log(this.currentState);
        },
        emitClickEvent(){
            this.$emit("clickEvent")
        }
    }
})
</script>

<style scoped>
    .main{
        border-radius: 5px;
        position: absolute;
        top: 30px;
        left: 1px;
        overflow-y: hidden;
        overflow-x: hidden;
        border: 0.5px solid #333;
    }

    .dark .main{
        border: 0.5px solid #ccc;
    }

    .main.max{
        transition: width 0.2s ease,
                    height 0.2s ease;
    }

    .light{
        background-color: rgb(255, 255, 255);
        color: black;
    }

    .dark{
        background-color: #333;
        color: #ccc;
    }

    .content{
        height: 90%;
        overflow-y: auto;
    }
</style>