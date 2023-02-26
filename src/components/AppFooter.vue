<script>
import AppFooterTop from './AppFooterComponents/AppFooterTop.vue';
import AppFooterBottom from './AppFooterComponents/AppFooterBottom.vue'
    export default {
        name: "AppFooter",
        components: {
            AppFooterTop,
            AppFooterBottom
        }
    }
</script>

<template>
    <footer>
        
        <section id="container" class="footer-top flex">
            <AppFooterTop />
        </section>
        <hr>
        <section id="container" class="footer-bottom flex">
            <AppFooterBottom />
        </section>
    </footer>
</template>

<style lang="scss" scoped>
    footer{
        background-color: var(--background-third-color);
        .footer-top{
            padding: 65px 0;
        }

    }
</style>