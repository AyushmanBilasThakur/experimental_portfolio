<template>
    <div class="tooltipWrapper">
        <slot />

        <span class="tooltip">{{tooltipText}}</span>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: ["tooltipText"]
})
</script>

<style scoped>
.tooltipWrapper{
    width: fit-content;
    position: relative;
}


.tooltip{
  visibility: hidden;
  width: 60px;
  top: 100%;
  left: 50%;
  margin-left: -30px;
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
.tooltipWrapper:hover .tooltip {
  visibility: visible;
}

.tooltip::after {
  content: " ";
  position: absolute;
  bottom: 100%;  /* At the top of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
}
</style>