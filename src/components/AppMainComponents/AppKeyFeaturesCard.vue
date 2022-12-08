<script>
    export default {
        name: "AppKeyFeaturesCard",
        data() {
            return {
                cards: [

                    {
                       icon:"fa-solid fa-layer-group",
                       title:"Modular",
                       text:"Composed in a pseudo-Latin language which more or less corresponds.",
                       link:"Read More",
                    },
                    {
                        icon:"fa-solid fa-mobile",
                        title:"Responsive",
                        text:"Composed in a pseudo-Latin language which more or less corresponds.",
                        link:"Read More",
                    },
                    {
                        icon:"fa-solid fa-window-maximize",
                        title:"Customizable",
                        text:"Composed in a pseudo-Latin language which more or less corresponds.",
                        link:"Read More",
                    },
                    {
                        icon:"fa-solid fa-maximize",
                        title:"Scalable",
                        text:"Composed in a pseudo-Latin language which more or less corresponds.",
                        link:"Read More",
                    },
                ],
            };
        },
    }
    
</script>

<template>
    <div class="flex sp-bw">
        <div v-for="elm in cards" :key="elm.icon" class="key-card">
        <div class="key-icon flex al-cnt just-cnt">
            <font-awesome-icon :icon= "elm.icon" />
        </div>
        
        <h6>{{elm.title}}</h6>
        <p>{{elm.text}}</p>
        <a href="#"> {{elm.link}} <font-awesome-icon icon= "fa-solid fa-chevron-right" /> </a>
    </div>
    </div>
    
</template>

<style lang="scss" scoped>
    .key-card{
        padding: 20px;
        border: 1px solid var(--background-second-color);
        border-radius: 5px;
        p{
            font-size: 15px;
            color: var(--first-text-color);
        }
        a{
            text-decoration: none;
            font-size: 15px;
            vertical-align: middle;
            .fa-chevron-right{
                font-size: 12px;
            }
        }
    }
    .key-card:not(:last-of-type){
        margin-right: 20px;
    }

    .key-icon{
        height: 60px;
        width: 60px;
        background-color: var(--background-second-color);
        color: var(--second-text-color);
        font-size: 20px;
        border-radius: 10px;
        margin-bottom: 30px;
    }
</style>