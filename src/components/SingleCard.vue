<template>
    <div id="single-card">
        <img :src="image" :alt="title">
        <h6>{{ title }}</h6>
        <p>{{ typology }}</p>
    </div>
</template>

<script>
    export default {
        name: 'SingleCard',
        props: ['id', 'title', 'image', 'typology']
    }
</script>

<style lang="scss" scoped>

#single-card{
 /*  width: calc(100% / 5); */
    margin-top: 5px;
 


img{
    width: 250px;
    height: auto;
}  
h6 {
    font-size: 0.9em;
    padding-top: 5px;
}

p{
    font-size: 0.8em;
}
}

</style>