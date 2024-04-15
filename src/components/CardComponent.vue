<template>
    <div id="card-boxes" class="container">
        <div id="single-card" v-for="(item, id) in store" :key="item.id">
            <SingleCard :id="item.id" :title="item.name" :image="item.image" :typology="item.archetype" />

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
    width: calc(100% / 5);
}


</style>