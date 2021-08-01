<template>
  <div class="cont">

    <i class="far fa-sun"></i>

      <label class="switch">
          <input type="checkbox" :checked="isDark" v-on:change="toggleTheme"/>
          <span class="slider round"></span>
      </label>

      <i class="far fa-moon"></i>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapMutations} from 'vuex';
export default Vue.extend({
    name: "ThemeToggler" ,
    data() {
      return {
        isDark: false
      }
    },
    mounted() {
      this.isDark = this.$store.state.theme == "dark";
    },
    methods: {
      ...mapMutations({
        themeToogle: "THEME_TOGGLE"
      }),
      toggleTheme(){
        if(!this.isDark) this.themeToogle("dark")
        else this.themeToogle("light")
      }
    }
})
</script>


<style scoped>
.cont{
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 12px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  left: 2px;
  bottom: 2.3px;
  background-color: #2196F3;
  -webkit-transition: .4s;
  transition: .4s;
}

.dark .slider::before{
  background-color: black;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:checked + .slider:before {
  transform: translateX(8px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 17px;
}

.slider.round:before {
  border-radius: 50%;
}

.dark .fa-moon{
  color: yellow;
}

.light .fa-sun{
  color: orangered;
}
</style>