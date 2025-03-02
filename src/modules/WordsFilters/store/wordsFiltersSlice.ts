import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IWordsArrayFilters, IWordsFilters, IWordsSelectFilters } from './wordsFiltersType';


const initialState: IWordsFilters = {
    selectFilters:{
        orderFilter:'A-Z',
    },
    arrayFilters:{
        tagFilter:[]
    },
    tags:['alibek','tima']
}

export const wordsFiltersSlice = createSlice({
    name: 'wordsFilters',
    initialState,
    reducers: {
        changeTagsArray(state,action:PayloadAction<string>) {
            state.tags.push(action.payload)
        },
        changeSelectFilters(state,action:PayloadAction<{field:keyof IWordsSelectFilters,value:string}>) {
            const {field,value} = action.payload
            state.selectFilters[field] = value
        },
        addArrayFilters(state,action:PayloadAction<{filed:keyof IWordsArrayFilters,value:string}>) {
            const {filed,value} = action.payload
            state.arrayFilters[filed].push(value)
        },
        removeArrayFilters(state,action:PayloadAction<{filed:keyof IWordsArrayFilters,value:string}>) {
            const {filed,value} = action.payload
            state.arrayFilters[filed] = state.arrayFilters[filed].filter(e => e !== value)
        },
    },
})

export const { changeSelectFilters,addArrayFilters,removeArrayFilters,changeTagsArray } = wordsFiltersSlice.actions

export default wordsFiltersSlice.reducer