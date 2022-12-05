<script>
    import axios from "axios"; //importo axios
    import { store } from "./store"; //importo store.js

    import AppHeader from "./components/AppHeader.vue"; //importo il componente header
    import AppMain from "./components/AppMain.vue"; //importo il componente main
    import AppFooter from "./components/AppFooter.vue";//importo il componente AppFooter

    export default {
        name: "App",
        components: {
            AppHeader, //registro il componente header
            AppMain, //registro il componente main
            AppFooter, //registro il componente AppFooter
        },  
        data () {
            return {
                store,
            }
        },
    }
</script>

<template>

    <AppHeader /> 
    <AppMain />
    <AppFooter />
  
</template>

<style lang="scss" scoped>
</style>
