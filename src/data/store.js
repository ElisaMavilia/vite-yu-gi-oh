import {reactive} from 'vue';

export const store = reactive ({
    apiUrl: 'https://db.ygoprodeck.com/api/',
    endPoint: {
        "title": "name",
        "image": "card_images",
        "type": "archetype"
    }
})