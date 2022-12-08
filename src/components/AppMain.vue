<script>
    import AppMainCard from './AppMainComponents/AppMainCard.vue'
    import AppKeyFeaturesCard from './AppMainComponents/AppKeyFeaturesCard.vue'
    export default {
        name: "AppMain",
        components:{
            AppMainCard,
            AppKeyFeaturesCard 

        }
        
        }
</script>

<template>
    <div class="container">
        <section id="key-features">
            <div class="key-text">
                <h2>Key Features</h2>
                <p>Start Working with <a href="#">Landrick</a> that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>
            <AppKeyFeaturesCard />
        </section>
            
       
        
        <AppMainCard/>
    </div>
</template>

<style lang="scss" scoped>
    #key-features{
        margin-top: 115px;
        margin-bottom: 70px;
        .key-text{
            width: 55%;
            margin-bottom: 70px;
            h2{
                margin-bottom: 40px;
            }
            p{
                color: var(--first-text-color);
                a{
                    text-decoration: none;
                    color: var(--second-text-color);
                    font-size: inherit;
                }
            }
        }
    }
       
</style>