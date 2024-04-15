import {reactive} from 'vue';

export const store = reactive ({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    endPoint: {
        "title": "name",
        "image": "https://images.ygoprodeck.com/images/cards_small/34541863.jpg",
        "typology": "archetype"
    },
    cardElements: [],
})