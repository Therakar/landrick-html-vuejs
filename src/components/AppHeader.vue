<script>
    import AppLogoHeader from './AppHeaderComponents/AppLogoHeader.vue';
    import AppNavHeader from './AppHeaderComponents/AppNavHeader.vue';
    import AppIconsHeader from './AppHeaderComponents/AppIconsHeader.vue';
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
            padding: 10px;
        }
    }
    
</style>