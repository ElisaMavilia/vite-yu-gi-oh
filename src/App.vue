<template>
 <HeaderComponent />
 <MainComponent />
 <CardComponent />
 <SingleCard />
</template>

<script>
import { store } from './data/store.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import CardComponent from './components/CardComponent.vue';
import SingleCard from './components/SingleCard.vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent,
      CardComponent,
      SingleCard
    },
    data(){
      return{
        store
      }
    },
    methods: {
      getCards(){
        axios.get(this.store.apiUrl).then((res)=>{
          this.store.cardElements = res.data.data; 
          console.log(this.store.cardElements);
        });
      }
      
    },
    created(){
      this.getCards();
    }
   
      
  
    
  }
  
</script>

<style lang="scss" scoped>

</style>