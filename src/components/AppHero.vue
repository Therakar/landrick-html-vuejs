<script>
    import AppHeroCard from './AppHeroComponents/AppHeroCard.vue';
    import AppHeroPlatforms from './AppHeroComponents/AppHeroPlatforms.vue';

    export default {
        name: "AppHero",
        components:{
            AppHeroCard,
            AppHeroPlatforms
        },
    }
</script>

<template>
    <div class="hero">
        <AppHeroCard/>
        <AppHeroPlatforms/>
    </div>
    
</template>

<style lang="scss" scoped>
    .hero{
        background-color: var(--background-first-color);
    }
</style>