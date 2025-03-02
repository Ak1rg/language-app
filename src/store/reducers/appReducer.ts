import { IAppState } from '@/types/appType'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState: IAppState = {
    sideBarWide:true,
    theme:'black',
    routes:{
        lists:'/app/lists/',
        words:'/app/words/',
    }
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        changeSideBarWide(state,action:PayloadAction<boolean>) {
            state.sideBarWide = action.payload
        }
    },
})

export const { changeSideBarWide } = appSlice.actions

export default appSlice.reducer