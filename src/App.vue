<template>
 <HeaderComponent />
 <MainComponent />
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
        axios.get(this.store.apiUrl + this.store.endPoint.title, this.store.options).then((res)=>{
          this.store.cardElements = res.data.data; 
          console.log(this.store.cardElements);
          this.store.total = res.data.meta.total_rows;
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