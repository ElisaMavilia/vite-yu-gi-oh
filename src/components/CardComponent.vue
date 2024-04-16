<template>
    
         <div id="card-boxes" v-for="cardElements in store.cardElements" :key="cardElements.id">
        <SingleCard :id="cardElements.id" :title="cardElements.name" :image="cardElements.card_images[0].image_url_small" :typology="cardElements.archetype" />
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

</style>