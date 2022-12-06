
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
                    },
                    {
                        href: "#",
                        label: "LANDING",
                        active: false,
                    },
                    {
                        href: "#",
                        label: "PAGES",
                        active: false,
                    },
                    {
                        href: "#",
                        label: "DOCS",
                        active: false,
                    },
                ],
            };
        },
    }
</script>

<template>
    <ul class="flex">
        <li v-for="(link, index) in links" class="">
            <a :href="link.href">{{link.label}}</a>
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