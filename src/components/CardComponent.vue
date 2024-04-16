<template>
    
    <div id="card-boxes" class="container d-flex justify-content-between">
         <div id="single-card" v-for="cardElements in store.cardElements" :key="cardElements.id">
        <SingleCard :id="cardElements.id" :title="cardElements.name" :image="cardElements.card_images[0].image_url_small" :typology="cardElements.archetype" />
        </div> 
    </div>

   
</template>

<script>
import { store } from '../data/store.js';
import SingleCard from './SingleCard.vue';

    export default {
        name: 'CardComponent',
        components: {
            SingleCard
    },
    data(){
            return{
                store
            }
        }
    } 
</script>

<style lang="scss" scoped>

#card-boxes{
    width: 100%;
}



</style>