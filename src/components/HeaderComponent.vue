<template>
    <header class="px-4 py-4">
        <img src="../assets/img/pngaaa.com-426286.png" alt="Logo">
        Yu-Gi-Oh Api
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

header{
    width: 100%;
    background-color: $whiteheader;
    border: 1px solid red;
    font-weight: 500;
    font-size: 2.5em;

img {
    width: 15%;
}    
}
</style>