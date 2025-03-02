import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITipWord } from './tipWordType';
import { IWord } from '../wordsType';


const initialState: ITipWord = {
    tipOpen:false,
    tipTimeout:null,
    pos:{
        x:null,
        y:null
    },
    word:null,
}

export const tipWordSlice = createSlice({
    name: 'tipWord',
    initialState,
    reducers: {
        changeTipOpen(state,action:PayloadAction<boolean>) {
            state.tipOpen = action.payload
        },
        changeTipTimeout(state,action:PayloadAction<number|null>) {
            state.tipTimeout = action.payload
        },
        changeTipPos(state,action:PayloadAction<{x:number|null,y:number|null}>){
            state.pos = action.payload
        },
        changeTipWord(state,action:PayloadAction<IWord|null>){
            state.word = action.payload
        },
    },
})

export const { changeTipOpen,changeTipTimeout,changeTipPos,changeTipWord } = tipWordSlice.actions

export default tipWordSlice.reducer