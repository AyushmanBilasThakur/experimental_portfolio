<template>
    <div class="cont two-col">
        <img src="/me.jpeg" alt="" />
        <div class="text">
            <h1>Ayushman Bilas Thakur</h1>
            <p>Fullstack web developer</p>

            <div class="tech">
                <h3>Technologies I'm familiar with</h3>

                <div class="techList">
                    <Tech tooltipText="HTML5">
                        <i class="fab fa-html5"></i>
                    </Tech>

                    <Tech tooltipText="CSS3">
                        <i class="fab fa-css3-alt"></i>
                    </Tech>


                    <Tech tooltipText="JavaScript">
                        <i class="fab fa-js"></i>
                    </Tech>

                    <Tech tooltipText="Node and Express">
                        <i class="fab fa-node-js"></i>
                    </Tech>

                    <Tech tooltipText="Vue.js">
                        <i class="fab fa-vuejs"></i>
                    </Tech>

                    <Tech tooltipText="React">
                        <i class="fab fa-react"></i>
                    </Tech>

                    <Tech tooltipText="MongoDB">
                        <i class="fas fa-database"></i>
                    </Tech>
                </div>

            </div>

            <div class="cta-buttons">
                <a href="/Ayushman Bilas Thakur.pdf" target="_blank" class="primary-button">Download Resume</a>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Tech from '~/components/portfolio_content/Tech.vue';
export default Vue.extend({
    name: "AbotPage",
    props: ["width"],
    components: {
        Tech
    }
})
</script>

<style scoped>
    .cont{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .two-col{
        flex-direction: row;
    }

    .one-col{
        flex-direction: column;
    }

    img{
        width: 150px;
        height: 150px;
        display: block;
        border-radius: 100px;
        margin-right: 10px;
    }

    .text{
        margin-left: 10px;
    }

    .tech{
        margin-top: 20px;
    }

    .tech h3{
        margin-bottom: 3px;
    }

    .techList{
        font-size: 30px;
        display: flex;
        grid-gap: 10px;
    }

    .fa-html5{
        color: orange;
    }
    .fa-css3-alt{
        color: #208FF5;
    }
    .dark .fa-js,
    .dark .fa-database{
        color: #FFE70D;
    }

    .fa-node-js{
        color: #479D36;
    }

    .fa-vuejs{
        color: #479D36;
    }

    .fa-react{
        color: #208FF5;
    }

    .cta-buttons{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .cta-buttons button{
        display: block;
        padding: 10px 5px;
        width: 48%;
        cursor: pointer;
        border-radius: 10px;
        border-width: 0;
        transition: background-color 0.3s ease;
        font-weight: bold;
    }

    .primary-button{
        background-color: #DCDCDC;  
        text-decoration: none;
        color: black;
        padding: 10px 20px;
        border-radius: 10px; 
        font-weight: bold;
        font-size: 0.8rem;
    }

    .primary-button:hover{
        background-color: #a9fd9a;   
    }

    .secondary-button{
        background-color: #50b6f1;
    }

    .secondary-button:hover{
        background-color: #92d7ff;
    }

    @media (max-width: 768px) {
        .two-col{
            flex-direction: column;
            padding: 40px 0;
            text-align: center;
            font-size: 80%;
            justify-self: center;
            align-self: center;
            width: 100vw;
        }
        img{
            margin: 0px;
            margin-bottom: 10px;
        }
        h1{
            margin-bottom: 5px;
        }
        .tech{
            margin: 0px;
            padding: 0;
            margin-top: 10px;
        }
        .techList{
            justify-content: center;
        }

        .cta-buttons{
            display: flex;
            justify-content: center;
        }
    }

</style>