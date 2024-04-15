<template>
    <main>
        <div class="my-5" id="white-container">

            white container
        </div>
    </main>
</template>

<script>
    export default {
        name: 'MainComponent',
        components: {
            
        }
    }
</script>


<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

main{
    width: 100%;

#white-container{
    max-width: 1500PX;
    margin: 0 auto;
    background-color: $whiteheader;
}
}
</style>