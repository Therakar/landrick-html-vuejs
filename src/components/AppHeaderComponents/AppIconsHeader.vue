<script>
    export default {
        name: "AppIconsHeader",
        data() {
            return {
                icons: [
                    {
                        icon: "fa-brands fa-github",
                    },
                    {
                        icon: "fa-brands fa-stack-overflow",
                    },
                    {
                        icon: "fa-regular fa-user",
                    },
                ],
            };
        },
    }
</script>

<template>
    <div class="icons flex">
        <button class="header-search-btn flex al-cnt just-cnt">
            <font-awesome-icon icon= "fa-magnifying-glass fa-solid" class="header-icon"/>
        </button>
        
        <ul class="flex al-cnt">
            <li v-for="elm in icons" :key="elm.icon" >
                <button class="header-btn flex al-cnt just-cnt">
                    <font-awesome-icon :icon= "elm.icon" class="header-icon"/>
                </button>
            </li>
        </ul>
    </div>
    
</template>

<style lang="scss" scoped>

    ul{
        padding: 0;
        .header-btn{
            border: 1px solid lightgray;
            border-radius: 7px;
            background-color: var(--background-btn-first-color);
            color: var(--second-text-color);
            height: 35px;
            width: 35px;
            font-size: 17px;
            margin-right: 10px;
            box-shadow:  0 2px 4px 0 rgba(7, 6, 117, 0.4);
        }
    }
    .header-search-btn{
        color: var(--first-text-color);
        height: 35px;
        width: 35px;
        font-size: 17px;
        margin-right: 13px;
    }
    
    
</style>