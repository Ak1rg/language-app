import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IListsArea } from './listsAreaType';


const initialState:IListsArea = {
    listsNames:['gym','stretch','game','programming'],
    listsDraggable:false,
}

export const listsAreaSlice = createSlice({
    name: 'listsArea',
    initialState,
    reducers: {
        changeLists(state,action:PayloadAction<string[]>) {
            state.listsNames = action.payload;
        },
        changeListsDraggable(state,action:PayloadAction<boolean>) {
            state.listsDraggable = action.payload;
        },
    },
})

export const { changeLists,changeListsDraggable } = listsAreaSlice.actions

export default listsAreaSlice.reducer