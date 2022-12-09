<script>
    export default {
        name: "AppNewsleterInput"
    }
</script>

<template>
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Email Address" aria-label="Email Address" aria-describedby="button-add-email">
        <div class="border flex al-cnt">
            <button class="btn btn-email " type="button" id="button-add-email">Get Started</button>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
    .form-control{
        border-radius: 50px;
        padding-left: 30px;
        border-right: none;
    }
    .form-control::placeholder{
        font-weight: 500;
    }
    .border{
        border-radius: 50px;padding: 1px;
        padding: 5px;
    }
    .btn-email{
        color: #ffffff;
        border-radius: 50px;
        border:1px solid var(--background-btn-second-color);
        background-color: var(--background-btn-second-color);
        font-weight: 500;
    }
</style>