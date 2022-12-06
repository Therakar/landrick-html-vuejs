<script> 
// importo i componenti
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import AppHero from './components/AppHero.vue'
//registro i componenti
export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    AppHero
  }
}
</script>

<!-- inserisco i componenti nell'html -->
<template>
  <AppHeader />
  <AppHero />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
@import './style/global.scss'; // importo il documento css principale nel quale sono importti tutti gli altri documenti css più specifici
</style>
