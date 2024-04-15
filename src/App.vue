<template>
 <HeaderComponent />
 <MainComponent />
</template>

<script>
import { store } from './data/store.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent
    },
    data(){
      return{
        store
      }
    },
    methods: {
      getCards(){
        axios.get(this.store.apiUrl + this.store.endPoint.cardElements).then((res)=>{
          console.log(res.data.results);
          this.store.cardElements = res.data.data.results; 
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