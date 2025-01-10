import { IAppState } from '@/types/appType'
import { createSlice } from '@reduxjs/toolkit'


const initialState: IAppState = {
    theme:'white',
    routes:{
        home:'/own/',
    }
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
    },
})

// export const { } = appSlice.actions

export default appSlice.reducer