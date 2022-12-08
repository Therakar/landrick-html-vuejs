
<script>
    export default {
        name: "AppNavHeader",
    
        data() {
            return {
                links: [
                    {
                        href: "#",
                        label: "HOME",
                        active: false,
                        icon: null
                    },
                    {
                        href: "#",
                        label: "LANDING",
                        active: false,
                        icon: "fa-solid fa-chevron-down",
                    },
                    {
                        href: "#",
                        label: "PAGES",                       
                        active: false, 
                        icon: "fa-solid fa-chevron-down",
                    },
                    {
                        href: "#",
                        label: "DOCS",
                        active: false, 
                        icon: "fa-solid fa-chevron-down",
                    },
                ],
            };
        },
    }
</script>

<template>
    <ul class="flex">
        <li v-for="link in links" class="">
            <a :href="link.href">
                {{link.label}}
                <span><font-awesome-icon :icon= "link.icon"/></span>
            </a>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
    
    li:not(:last-of-type){
        padding-right: 70px;
        
    }

    a{
        text-decoration: none;
        color: var(--first-text-color);
    }
</style>