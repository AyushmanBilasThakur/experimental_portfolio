<template>
  <div :class="`${os_value} bg ${theme}`">
    
    <div class="container centered">
      
      <div v-if="os_value == 'none'">
        
        <h1>Select Your OS</h1>
        <div class="os-selection" v-if="windowWidth > 768">
          <button class="btnx" v-on:click="() => {change_os_value('windows')}">
            <div class="icon">
              <i class="fab fa-windows"></i>
            </div>
            <p>Windows</p>
          </button>
          <button class="btnx" v-on:click="() => {change_os_value('mac')}">
            <div class="icon">
              <i class="fab fa-apple"></i>
            </div>
            <p>MacOS</p>
          </button>
        </div>

        <div v-else>
          <button class="btnx" v-on:click="() => {change_os_value('android')}">Android</button>

          <button class="btnx" disabled>iOS (100$/year developer fees can't be paid)</button>
        </div>

        <div class="theme-toggler-container">
          <ThemeToggler/>
        </div>
      </div>
      <div v-else>
        <div v-if="os_value == 'windows'" ref="wincon">
          
            <Windows
              
              v-if="aboutPageActive"
              initialWidth="760" 
              initialHeight="400"
              :theme="theme"
              title="👋 Hello World"
              v-on:closeWindow = "() => aboutPageActive = !aboutPageActive"
              v-on:clickEvent = "() => activeAboutPage()"
              :zIndex = "zIndexList[0]"
            >
              <about-page />
            </Windows>
        
          
          <Windows
            ref = "projectPage"
            v-if="projectsPageActive" 
            initialWidth="760" 
            initialHeight="400"
            title="🔨 My Projects"
            :theme="theme"
            v-on:closeWindow = "() => projectsPageActive = !projectsPageActive"
            v-on:clickEvent = "() => activeProjectPage()"
            :zIndex = "zIndexList[1]"
          >
            <projects-page />
          </Windows>

          <Windows
            ref = "worksPage"
            v-if="worksPageActive" 
            initialWidth="760" 
            initialHeight="400"
            title="🔨 My work experience"
            :theme="theme"
            v-on:closeWindow = "() => worksPageActive = !worksPageActive"
            v-on:clickEvent = "() => activeWorkPage()"
            :zIndex = "zIndexList[2]"
          >
            <internship-page/>
          </Windows>

          <WindowsTaskbar 
            v-on:windowsButtonClick="() => change_os_value('none')"
            v-on:projectsButtonClick="() => {projectsPageActive = !projectsPageActive; activeProjectPage()}"

            v-on:worksButtonClick="() => {worksPageActive = !worksPageActive; activeWorkPage()}"

            v-on:aboutButtonClick="() => {aboutPageActive = !aboutPageActive; activeAboutPage()}"
          />
        </div>
        <div v-if="os_value == 'mac'">
          <mac-topbar 
            v-on:windowsButtonClick="() => change_os_value('none')"
          />


          <mac-window
              
              v-if="aboutPageActive"
              initialWidth="760" 
              initialHeight="400"
              :theme="theme"
              title="👋 Hello World"
              v-on:closeWindow = "() => aboutPageActive = !aboutPageActive"
              v-on:clickEvent = "() => activeAboutPage()"
              :zIndex = "zIndexList[0]"
            >
              <about-page />
            </mac-window>
        
          
          <mac-window
            ref = "projectPage"
            v-if="projectsPageActive" 
            initialWidth="760" 
            initialHeight="400"
            title="🔨 My Projects"
            :theme="theme"
            v-on:closeWindow = "() => projectsPageActive = !projectsPageActive"
            v-on:clickEvent = "() => activeProjectPage()"
            :zIndex = "zIndexList[1]"
          >
            <projects-page />
          </mac-window>


          <mac-window 
            v-if="worksPageActive" 
            :initialWidth="768"
            :initialHeight="400"
            title="🔨 My work experience"
            :theme="theme"
            v-on:closeWindow = "() => worksPageActive = !worksPageActive"
            v-on:clickEvent = "() => activeWorkPage()"
            :zIndex = "zIndexList[2]"
          >
            <internship-page/>
          </mac-window>

          <mac-bottom-bar 
          
            v-on:projectsButtonClick="() => {projectsPageActive = !projectsPageActive; activeProjectPage()}"

            v-on:worksButtonClick="() => {worksPageActive = !worksPageActive; activeWorkPage()}"

            v-on:aboutButtonClick="() => {aboutPageActive = !aboutPageActive; activeAboutPage()}"
          />
          
        </div>

        <div v-if="os_value == 'android'">
            <div class="grid">
                <button class="icon-button orange" @click="() => change_os_value('none')">
                  <div class="icon">
                    <i class="fas fa-home"></i>
                  </div>
                  Home
                </button>

                <button class="icon-button blue" @click="androidAboutPage">
                  <div class="icon">
                    <i class="fas fa-user"></i>
                  </div>
                  About Me
                </button>

                <button class="icon-button blue" @click="androidWorkPage">
                  <div class="icon">
                    <i class="fas fa-briefcase"></i>
                  </div>
                  Works
                </button>

                <button class="icon-button blue" @click="androidProjectPage">
                  <div class="icon">
                    <i class="fas fa-tools"></i>
                  </div>
                  Projects
                </button>
            </div>

            <div :class="`page ${aboutPageActive || worksPageActive || projectsPageActive ? 'active' : '' }`">
              <button class="pageBackButton" @click="pageDeactivate">
                <i class="fas fa-arrow-left"></i>
              </button>

              <about-page v-if="aboutPageActive"/>
              <internship-page v-if="worksPageActive" />
              <projects-page v-if="projectsPageActive" />
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
import MacBottomBar from '~/components/MacBottomBar.vue';
import MacTopbar from '~/components/MacTopbar.vue';
import MacWindow from '~/components/MacWindow.vue';
import AboutPage from '~/components/portfolio_content/AboutPage.vue';
import InternshipPage from '~/components/portfolio_content/InternshipPage.vue';
import ProjectsPage from '~/components/portfolio_content/ProjectsPage.vue';
import Windows from '~/components/Windows.vue';
import WindowsTaskbar from "~/components/WindowsTaskbar.vue";


export default Vue.extend({
  components: { Windows, AboutPage, WindowsTaskbar, ProjectsPage, InternshipPage, MacTopbar, MacBottomBar, MacWindow },
  data() {
    return({
      windowWidth: 0,
      aboutPageActive: false,
      projectsPageActive: false,
      worksPageActive: false,
      zIndexList: [1,2,3]
    })
  },
  mounted(){
    this.windowWidth = window.innerWidth;

    this.$nextTick(() => {
        window.addEventListener('resize', () => {
          this.windowWidth = window.innerWidth
          if((this.os_value != 'android' && window.innerWidth < 768)|| (this.os_value == 'android' && window.innerWidth > 768)){
            this.osChange('none')
          }
        });
    })
  },  
  methods: {
    ...mapMutations({
      osChange: "OS_CHANGE",
      themeToogle: "THEME_TOGGLE"
    }),
    change_os_value: function(os_type: string) {
      this.osChange(os_type);
    },
    aboutButtonClick: function(os: string){
      if(os == "windows"){
        this.aboutPageActive = !this.aboutPageActive
      }
    },
    activeAboutPage(){
      this.zIndexList = [3,1,2]
    },
    activeProjectPage(){
      this.zIndexList = [1,3,2]
    },
    activeWorkPage(){
      this.zIndexList = [1,2,3]
     },
     androidAboutPage(){
       this.aboutPageActive = true;
       this.worksPageActive = false;
       this.projectsPageActive = false;
     },
     androidWorkPage(){
       this.aboutPageActive = false;
       this.worksPageActive = true;
       this.projectsPageActive = false;
     },
     androidProjectPage(){
       this.aboutPageActive = false;
       this.worksPageActive = false;
       this.projectsPageActive = true;
     },

     pageDeactivate(){
       this.aboutPageActive = false;
       this.worksPageActive = false;
       this.projectsPageActive = false;
     }
  },
  computed: {
    os_value: function() {
      return this.$store.state.os
    },
    theme() {
      return this.$store.state.theme
    }
  }
})
</script>

<style>
  .container{
    margin: 0 auto;
    width: 90%;
    max-width: 1024px;
  }

  .centered{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .theme-toggler-container{
    width: fit-content;
    margin: 10px auto;
  }

  .os-selection{
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .btnx{
    display: block;
    width: 100%;
    height: fit-content;
    margin: 10px 0;
    padding: 10px;
    cursor: pointer;
    border: none;
    outline: none;
    border: 1px solid black;
    border-radius: 5px;
    background-color: transparent;
    transition: background-color 0.3s ease-in-out,
                font-size 0.3s ease-in-out,
                padding 0.3s ease;
  }

  .dark .btnx{
    color: white;
    border-color: #ccc;
  }

  .dark .btnx:hover{
    background-color: #555;
  }

  .btnx:hover{
    background-color: #eee;
    padding: 10px 35px;
  }

  .fa-windows{
    color: #3491E7;
  }

  .btnx .icon{
    font-size: 3rem;
    transition: font-size 0.3s ease-in-out;
  }

  .btnx:hover .icon{
    font-size: 4rem;
  }

  .bg{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow-y: hidden;
    overflow-x: hidden;
  }

  .bg.dark{
    background-color: black;
    color: white;
  }

  .bg.light{
    background-color: white;
    color: black;
  }

  .windows{
    background-image: url("/Windows.png");
  }

  .mac{
    background-image: url("/MacBook.png");
  }

  .android{
    background-image: url("/android.jpeg");
  }

  .grid{
    position: absolute;
    top: 20px;
    left:0;
    right: 0;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    z-index: 5;
    gap: 10px;
  }

  .icon-button{
    background: none;
    color: white;
    border: none;
    outline: none;
  }

  .icon{
    padding: 10px;
    font-size: 2rem;
    margin-bottom: 5px;
  }


  .page{
    position: relative;
    z-index: 10;
    height: 100vh;
    overflow-y: scroll;
    width: 100vw;
    background-color: white;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    display: flex;
    padding-top: 60px;
  }

  .page.active{
    transform: translateX(0);
  }

  .pageBackButton{
    position: absolute;
    z-index: 20;
    top: 20px;
    left: 20px;
    border: none; 
    outline: none;
    background: none;
    font-size: 2rem;
  }


</style>
