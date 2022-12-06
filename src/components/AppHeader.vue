<script>
    import AppLogoHeader from './AppHeader Components/AppLogoHeader.vue';
    import AppNavHeader from './AppHeader Components/AppNavHeader.vue';
    import AppIconsHeader from './AppHeader Components/AppIconsHeader.vue';
    export default {
        name: "AppHeader",
        components: {
            AppLogoHeader,
            AppNavHeader,
            AppIconsHeader,
        }
    }
</script>

<template>
    <header>
            <div class="container flex sp-bw al-cnt">
                <AppLogoHeader />
                <AppNavHeader />
                <AppIconsHeader />
            </div>
    </header>
</template>

<style lang="scss" scoped>
    header{
        width: 100%;
        background-color: var(--background-first-color);
        .container{
            max-width: 1100px;
            margin: auto;
            padding-top: 10px;
        }
    }
    
</style>