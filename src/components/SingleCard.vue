<template>
    <div id="single-card" class="">
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
    width: calc(100% / 5);
}

</style>