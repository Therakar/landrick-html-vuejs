<script>
    import AppMainCard from './AppMainComponents/AppMainCard.vue'
    import AppKeyFeaturesCard from './AppMainComponents/AppKeyFeaturesCard.vue'
    import AppQuickstartCard from './AppMainComponents/AppQuickstartCard.vue'
    export default {
        name: "AppMain",
        components:{
            AppMainCard,
            AppKeyFeaturesCard,
            AppQuickstartCard,

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
        <section id="quickstart">
            <div class="quickstart-text">
                <span class="badge">Quickstart</span>
                <h2>Awesome isn't it? Let's dive in!</h2>
                <p>Start Working with <a href="#">Landrick</a> that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>
            <AppQuickstartCard/>
        </section>

        <AppMainCard/>
    </div>
</template>

<style lang="scss" scoped>
    a{
        text-decoration: none;
        color: var(--second-text-color);
        font-size: inherit;
    }
    #key-features{
        margin-top: 115px;
        margin-bottom: 80px;
        .key-text{
            width: 55%;
            margin-bottom: 70px;
            h2{
                margin-bottom: 40px;
            }
        }
    }

    #quickstart{
        .quickstart-text{
            width: 590px;
            text-align: center;
            margin: auto;
        }
        .badge{
            color: var(--second-text-color);
            font-size: inherit;
        }
        h2{
            margin: 20px 0;
        }
    }
       
</style>