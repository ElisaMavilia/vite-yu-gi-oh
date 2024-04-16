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
        axios.get(this.store.apiUrl + this.store.endPoint.title, this.store.options).then((res)=>{
          this.store.cardElements = res.data.data; 
         /*  console.log(this.store.cardElements); */
          this.store.total = res.data.meta.total_rows;
        });
      },
      getArchetype(){
        axios.get(this.store.apiUrl + this.store.endPoint.archetype).then((res)=>{
          this.store.archetypeList = res.data.slice; 
         /*  console.log(this.store.archetypeList); */
        });
      },
      
    },
    created(){
      this.getCards();
      this.getArchetype();
    },
    
  }
  
</script>

<style lang="scss" scoped>

</style>