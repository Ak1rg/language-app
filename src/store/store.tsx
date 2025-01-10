import { IAppState } from "@/types/appType";
import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector } from "react-redux"
import appSlice from "./reducers/appReducer";

export interface IState{
    app:IAppState
}

export const store = configureStore({
    reducer: {
        app: appSlice,
    },
})

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
