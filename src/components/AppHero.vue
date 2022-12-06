<script>
    import AppHeroCard from './AppHero Components/AppHeroCard.vue';
    import AppHeroPlatforms from './AppHero Components/AppHeroPlatforms.vue';
    export default {
        name: "AppHero",
        components:{
            AppHeroCard,
            AppHeroPlatforms
        }
    }
</script>

<template>
    <AppHeroCard/>
    <AppHeroPlatforms/>
</template>

<style lang="scss" scoped>

</style>