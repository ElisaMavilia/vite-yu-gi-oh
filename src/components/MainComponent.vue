<template>
    <main>
       
        <div class="mt-5 py-5 px-5 d-flex justify-content-between align-content-center align-items-center flex-wrap" id="white-container">
            <TotalComponent />
        <CardComponent />
        </div>
    </main>
</template>

<script>
import CardComponent from './CardComponent.vue';
import TotalComponent from './TotalComponent.vue';
    export default {
        name: 'MainComponent',
        components: {
            CardComponent,
            TotalComponent
        }
    }
</script>


<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;


#white-container{
    max-width: 1500PX;
    margin: 0 auto;
    background-color: $whiteheader;
}

</style>