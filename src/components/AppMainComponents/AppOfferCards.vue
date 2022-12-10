<script>
    export default {
        name: "AppOfferCards",
        data() {
            return {
                offers: [
                    {
                        badge:"Basic",
                        price: "9.00",
                        billing: "Per Month",
                        description: "All the basics for businesses that are just getting started.",
                    },
                    {
                        badge:"Business",
                        price: "39.00",
                        billing: "Per Month",
                        description: "Better for growing businesses that want more customers.",
                        ribbon: ``
                    },
                    {
                        badge:"Enterprise",
                        price: "79.00",
                        billing: "Per Month",
                        description: "Advanced features for pros who need more costomization.",
                    },
                ],
                features: [
                    {
                       text:"Full Access", 
                       icon: "fa-regular fa-circle-check" 
                    },
                    {
                        text:"Enhanced Security",
                        icon: "fa-regular fa-circle-check"
                    },
                    {
                        text:"Source Files",
                        icon: "fa-regular fa-circle-check"
                    },
                    {
                        text:"1 Domani Free",
                        icon: "fa-regular fa-circle-check"
                    },
                    {
                        text:"Enhanced Security",
                        icon: "fa-regular fa-circle-check"
                    }
                ]
            };
        },
    }
</script>

<template>
    <div class="offers-card" v-for="(offer, index) in offers">
        <div :class='{ active: index == 1  }' class="ribbon"><span>BEST</span></div>
        <span class="badge ">{{offer.badge}}</span>
        <h1><span><font-awesome-icon icon= "fa-solid fa-dollar-sign" class="price-icon"/></span>{{offer.price}}</h1>
        <p>{{offer.billing}}</p>
        <p>{{offer.description}}</p>
        <hr>
        <ul>
            <li v-for="feature in features" class="flex">
                <span><font-awesome-icon :icon= "feature.icon" class="feature-icon"/></span>
                <p>{{feature.text}}</p>
            </li>
        </ul>
        <button>Buy Now</button>
        <p>*No credit card required</p>
    </div>
</template>

<style lang="scss" scoped>
    .offers-card {
        width: 31%;
        border: 1px solid var( --background-second-color);
        padding: 25px;
        border-radius: 10px;
        position: relative;
        .badge{
            color: var(--second-text-color);
            font-size: 16px;
            padding: 16px 25px;
            background-color: var(--background-btn-first-color);
            border: 1px solid var(--background-second-color);
            border-radius: 50px;
            margin-bottom: 20px;
        }
        ul{
            padding: 0;
            .feature-icon{
                margin-right: 10px;
                color: var(--second-text-color);
            }
        }

        button{
            background-color: var(--background-btn-second-color);
            color: #ffffff;
            width: 100%;
            padding: 10px 0;
            border-radius: 10px;
            margin-bottom: 10px;
        }
        .ribbon {
            position: absolute;
            right: -5px; top: -5px;
            z-index: 1;
            overflow: hidden;
            width: 75px; height: 75px;
            text-align: right;
            display: none;
            }
        .ribbon span {
            font-size: 10px;
            font-weight: bold;
            color: #FFF;
            text-transform: uppercase;
            text-align: center;
            line-height: 20px;
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            width: 100px;
            display: block;
            background: #79A70A;
            background: linear-gradient(var(--ribbon-color) 0%, var(--ribbon-color) 100%);

            position: absolute;
            top: 19px; right: -21px;
        }
        .ribbon span::before {
            content: "";
            position: absolute; left: 0px; top: 100%;
            z-index: -1;
            border-left: 3px solid var(--ribbon-color);
            border-right: 3px solid transparent;
            border-bottom: 3px solid transparent;
            border-top: 3px solid var(--ribbon-color);
        }
            .ribbon span::after {
            content: "";
            position: absolute; right: 0px; top: 100%;
            z-index: -1;
            border-left: 3px solid transparent;
            border-right: 3px solid var(--ribbon-color);
            border-bottom: 3px solid transparent;
            border-top: 3px solid var(--ribbon-color);
        }
        .active {
            display: block;
        }
    }
</style>