<script>
    export default {
        name: "AppHeroPlatforms",
        data() {
            return {
                platforms: [

                    {
                       img: `../../assets/amazon.svg`,
                       name: "amazon",
                    },
                    {
                        img: "../../assets/google.svg",
                        name: "google",
                    },
                    {
                        img: "../../assets/lenovo.svg",
                        name: "lenovo",
                    },
                    {
                        img: "../../assets/paypal.svg",
                        name: "paypal"
                    },
                    {
                        img: "../../assets/shopify.svg",
                        name: "shopify",
                    },
                    {
                        img: "../../assets/spotify.svg",
                        name: "soptify",
                    },
                ],
            };
        },
    }
</script>

<template>
    <div class="container">
        <ul class="flex sp-bw">
            <li v-for="platform in platforms">
                <img :src= "platform.img" :alt= "platform.name"/>
            </li>
        </ul>

    </div>
</template>

<style lang="scss" scoped>
    ul{
        list-style: none;
        padding: 30px 0;
    }
</style>