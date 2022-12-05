<script>

    import axios from "axios"; //importo axios
    import { store } from "../store"; //importo store.js
    

    export default {
        name: "AppMain",
        data () {
            return {
                store,
            }
        }
    }
</script>

<template>
    <div>
        <h1>Ciao</h1>
    </div>
</template>

<style lang="scss">
    h1{
        background-color: var(--background-footer-color);
    }
</style>