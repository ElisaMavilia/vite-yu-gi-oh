import {reactive} from 'vue';

export const store = reactive ({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/',
    endPoint: {
        title: "cardinfo.php",
        archetype: 'archetypes.php'
    },
    options:{ //serve per restringere il campo
        params: {
            num: 20,
            offset: 0,
            //archetype
        }
    },
    archetypeFilter:'',
    cardElements: [],
    archetypeList: [],
    total: 0,
    archetypeList:[]
})