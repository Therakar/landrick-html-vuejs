<script>
    import AppMainCard from './AppMainComponents/AppMainCard.vue'
    import AppKeyFeaturesCard from './AppMainComponents/AppKeyFeaturesCard.vue'
    import AppQuickstartCard from './AppMainComponents/AppQuickstartCard.vue'
    import AppOfferCards from './AppMainComponents/AppOfferCards.vue'
    import AppNewsleterInput from './AppMainComponents/AppNewsleterInput.vue'
    export default {
        name: "AppMain",
        components:{
            AppMainCard,
            AppKeyFeaturesCard,
            AppQuickstartCard,
            AppOfferCards,
            AppNewsleterInput
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
        <section id="offers">
            <div class="offers-text">
                <h2>Our rates for developer from landrick team</h2>
                <p>Start Working with <a href="#">Landrick</a> that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>
            <div class="card-container flex sp-bw">
                <AppOfferCards/>
            </div>
        </section>
        <section id="newsletter">
            <div class="newsletter-text">
                <h2>Want to be among the first to find out?</h2>
                <p>Start Working with <a href="#">Landrick</a> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                <AppNewsleterInput />
            </div>
        </section>
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

    #offers{
        margin-bottom: 115px;
        .offers-text{
            text-align: center;
            margin-bottom: 60px;
            
            h2{
                width: 780px;
                margin: auto;
                margin-bottom: 40px;
            }

            p{
                width: 670px;
                margin: auto;
            }

        }

        .card-container{
            width: 100%;
        }
    }
    #newsletter{
        margin-bottom: 120px;
        .newsletter-text{
            width: 740px;
            text-align: center;
            margin: auto;

            h2{
                margin-bottom: 25px;
            }
            p{
                margin-bottom: 40px;
            }
        }
    }
    
</style>