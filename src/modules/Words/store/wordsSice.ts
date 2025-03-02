import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IWord, IWords } from './wordsType';


const initialState: IWords = {
    wordsList:[
        {
            word: 'house',
            translate: 'дом',
            source: 'дом стоит на холме',
            sourceTranslate: 'the house stands on a hill',
            timeCreate: '25:02:10:12:00:21',
            tags: []
        },
        {
            word: "river",
            translate: "река",
            source: "Река течет между горами",
            sourceTranslate: "The river flows between the mountains",
            timeCreate: "25:02:10:12:00:22",
            tags: ['lol', 'kek']
        },
        {
            word: "bird",
            translate: "птица",
            source: "Птица летит над озером",
            sourceTranslate: "The bird flies over the lake",
            timeCreate: "25:02:10:12:00:23",
            tags: ['lol', 'kek']
        },
        {
            word: "bridge",
            translate: "мост",
            source: "Мост соединяет два берега",
            sourceTranslate: "The bridge connects two shores",
            timeCreate: "25:02:10:12:00:21",
            tags: ['lol']
        },
        {
            word: "car",
            translate: "машина",
            source: "Машина стоит возле дома",
            sourceTranslate: "The car is parked near the house",
            timeCreate: "25:02:10:12:00:21",
            tags: []
        },
        {
            word: "sun",
            translate: "солнце",
            source: "Солнце светит ярко",
            sourceTranslate: "The sun shines brightly",
            timeCreate: "25:02:10:12:00:21",
            tags: []
        },
        {
            word: "dog",
            translate: "собака",
            source: "Собака бежит по дороге",
            sourceTranslate: "The dog runs along the road",
            timeCreate: "25:02:10:12:00:21",
            tags: []
        },
        {
            word: "book",
            translate: "книга",
            source: "Книга лежит на столе",
            sourceTranslate: "The book is on the table",
            timeCreate: "25:02:10:12:00:21",
            tags: []
        },
        {
            word: "ocean",
            translate: "океан",
            source: "Океан простирается до горизонта",
            sourceTranslate: "The ocean stretches to the horizon",
            timeCreate: "25:02:10:12:00:21",
            tags: []
        },
        {
            word: "mountain",
            translate: "гора",
            source: "Гора покрыта снегом",
            sourceTranslate: "The mountain is covered with snow",
            timeCreate: "25:02:10:12:00:21",
            tags: []
        },
        {
            word: "cat",
            translate: "кот",
            source: "Кот спит на подоконнике",
            sourceTranslate: "The cat is sleeping on the windowsill",
            timeCreate: "25:02:10:12:00:21",
            tags: []
        },
        {
            word: "city",
            translate: "город",
            source: "Город шумит днем и ночью",
            sourceTranslate: "The city is noisy day and night",
            timeCreate: "25:02:10:12:00:21",
            tags: []
        },
        {
            word: "train",
            translate: "поезд",
            source: "Поезд прибыл на станцию",
            sourceTranslate: "The train has arrived at the station",
            timeCreate: "25:02:10:12:00:21",
            tags: []
        },
        {
            word: "flower",
            translate: "цветок",
            source: "Цветок распустился весной",
            sourceTranslate: "The flower bloomed in spring",
            timeCreate: "25:02:10:12:00:21",
            tags: []
        },
        {
            word: "tree",
            translate: "дерево",
            source: "Дерево дает тень в жаркий день",
            sourceTranslate: "The tree provides shade on a hot day",
            timeCreate: "25:02:10:12:00:21",
            tags: []
        }
    ],    
    draggableValue:false,
    wordModalOpen:false,
    wordModalWord:null,
    addWordModal:false,
    tagModal:false,
    wordModalIndex:-1,
}

export const wordsSlice = createSlice({
    name: 'words',
    initialState,
    reducers: {
        changeWordsDraggable(state,action:PayloadAction<boolean>) {
            state.draggableValue = action.payload
        },
        changeWordsList(state,action:PayloadAction<IWord[]>) {
            state.wordsList = action.payload
            console.log(1)
        },
        changeWordModalOpen(state,action:PayloadAction<boolean>) {
            state.wordModalOpen = action.payload
        },
        changeWordModalWord(state,action:PayloadAction<IWord|null>) {
            state.wordModalWord = action.payload
        },
        changeAddWordModal(state,action:PayloadAction<boolean>) {
            state.addWordModal = action.payload
        },
        changeTagModal(state,action:PayloadAction<boolean>) {
            state.tagModal = action.payload
        },
        changeWordModalIndex(state,action:PayloadAction<string>) {
            state.wordModalIndex = state.wordsList.findIndex(word => word.word === action.payload);
        },
        changeWord(state,action:PayloadAction<{field:keyof IWord,value:string}>) {
            const {field,value} = action.payload
            if (field === "tags") return;
            const index = state.wordsList.findIndex(word => word.word === state.wordModalWord?.word);
            state.wordsList[index][field] = value
        },
        addWord(state,action:PayloadAction<IWord>) {
            state.wordsList.push(action.payload)
        },
        addTag(state,action:PayloadAction<{sourceWord:string,value:string}>) {
            const {sourceWord,value} = action.payload
            const index = state.wordsList.findIndex(word => word.word === sourceWord);
            state.wordsList[index].tags.push(value)
        },
        deleteTag(state, action: PayloadAction<{ sourceWord: string; value: string }>) {
            const { sourceWord, value } = action.payload;
            const index = state.wordsList.findIndex(word => word.word === sourceWord);
            if (index !== -1) {
                state.wordsList[index].tags = state.wordsList[index].tags.filter(tag => tag !== value);
            }
        }
    },
})

export const { changeWordModalIndex,changeWordsDraggable,changeWordsList,changeWordModalOpen,changeWordModalWord,changeTagModal,changeWord,addWord,changeAddWordModal,deleteTag,addTag } = wordsSlice.actions

export default wordsSlice.reducer