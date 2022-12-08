<script>
    export default {
        name: "AppMainCard",
    }
</script>

<template>
    <section id="main-card" class="flex">
            <div class="main-card-text flex sp-ar">
                <h2>Build tools and extensive documentation</h2>
                <p>You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                <ul class="checks">
                    <li><font-awesome-icon icon= "fa-circle-check fa-regular" class="main-card-icon"/> Digital Marketing Solutions for Tomorrow</li>
                    <li><font-awesome-icon icon= "fa-circle-check fa-regular" class="main-card-icon"/> Our Talented & Experienced Marketing Agency</li>
                    <li><font-awesome-icon icon= "fa-circle-check fa-regular" class="main-card-icon"/> Create your own skin to match your brand</li>
                </ul>
                <button>Read More  <font-awesome-icon icon= "fa-arrow-right fa-solid"/></button>
            </div>    

            <div class="main-card-image">
                <img src="../../assets/1.png" alt="graphs">
            </div>
    </section>
    
</template>

<style lang="scss" scoped>
    #main-card{
        max-height: 450px;
        margin-bottom: 125px;
        .main-card-text{
            text-align: start;
            width: 60%;
            padding: 50px 0;
            flex-direction: column;
            .checks{
                padding: 0;
                .main-card-icon{
                    color: var(--second-text-color);
                }
                li:not(:last-of-type){
                    padding-bottom: 10px;
                }
            }
            button{
                width: 20%;
                height: 50px;
                background-color: var(--background-btn-second-color);
                color: #ffffff;
                font-weight: 600;
                border-radius: 5px;
                
            }
        }
        .main-card-image{
            width: 40%;
            img{
                height: 100%;
                padding-left: 100px;
            }
        }
    }
        
    
    
</style>