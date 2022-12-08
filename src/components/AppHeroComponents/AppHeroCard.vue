<script>
    export default {
        name: "AppHeroCard",
    }
</script>

<template>
    <section class="hero">
        <div class="container flex hero-top">
            <div class="hero-text flex just-cnt">

                <span class="badge">Development</span>

                <h1>A Complete Developer Toolset</h1>

                <p>Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page</p>

                <div class="hero-btn">
                    <button class="btn">Get Started</button>

                    <button class="btn btn-alternative">Documentation</button>
                </div>
                <p>Current Version: v2.6.0</p>
            </div>    

            <div class="hero-image">
                <img src="../../assets/about.png" alt="">
            </div>
        </div>
    </section>
    
</template>

<style lang="scss" scoped>
    .hero{
        background-color: var(--background-first-color);
        border-bottom: 1px solid lightgray;
        .hero-top{
            padding-bottom: 100px;
            padding-top: 120px;
            .hero-text{
                width: 60%;
                flex-direction: column;
                .badge{
                    width: 100px;
                    background-color: var(--background-btn-first-color);
                    color: var(--second-text-color);
                    border-radius: 10px;
                    margin-bottom: 10px;
                }
                h1{
                    font-size: 50px;
                    margin-bottom: 30px;
                }
                p{
                    font-size: 16px;
                    color: var(--first-text-color);
                   
                }
                .hero-btn{
                    margin: 10px 0 10px 0;
                    .btn{
                        background-color: var(--background-btn-second-color);
                        color: white;
                        margin-right: 10px;
                        border: 1px solid var(--second-text-color);
                    }
                    .btn-alternative{
                        background-color: transparent;
                        color: var(--second-text-color);
                        border: 1px solid var(--second-text-color);
                    
                    }
                }
                
            }
            .hero-image{
                width: 40%;
                margin-right: 10%;
                margin-left: 20px;
            }
        }
    }
    
    
</style>