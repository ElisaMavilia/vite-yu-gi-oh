<template>
    <header class="px-4 py-4">
        <img src="../assets/img/pngaaa.com-426286.png" alt="Logo">
        Yu-Gi-Oh Api
        <select class="form-select mt-4" @change="$emit ('archetypeSearch')" v-model="store.archetypeFilter">
            <option value="">All</option>
            <option :value="archetype" v-for="archetype in store.archetypeList">{{ archetype.archetype_name }}</option>
        </select>
    </header>
</template>

<script>
    import { store } from '../data/store.js';
    export default {
        name: 'HeaderComponent',
    data(){
      return{
        store
      }
    },
    }
   
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

header{
    width: 100%;
    background-color: $whiteheader;
    font-weight: 500;
    font-size: 2.5em;

img {
    width: 15%;
}

select{
    width: 20%;
}
}
</style>