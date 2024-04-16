<template>
    <div id="total-container" class="container py-3">
        <h5>Found {{ store.total }} cards</h5>
    </div>
</template>

<script>
    import { store } from '../data/store.js';
    export default {
        name: 'TotalComponent',
        data(){
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    #total-container{
        background-color: black;
        color: white;
        max-width: 1500px;
        
    }
</style>