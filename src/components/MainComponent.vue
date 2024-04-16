<template>
    <main>
        <div class="my-5" id="white-container">
       
        <SingleCard />
        </div>
    </main>
</template>

<script>

import SingleCard from './SingleCard.vue';

    export default {
        name: 'MainComponent',
        components: {
           
            SingleCard
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