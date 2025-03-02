import { IAppState } from "@/types/appType";
import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector ,useDispatch} from "react-redux"
import appSlice from "./reducers/appReducer";
import { ILists } from "@/modules/List/store/ListsType";
import listsSlice from "@/modules/List/store/ListsSlice";
import listsAreaSlice from "@/modules/ListsArea/store/listsAreaSlice";
import { IListsArea } from "@/modules/ListsArea/store/listsAreaType";
import { IWords } from "@/modules/Words/store/wordsType";
import wordsSlice  from "@/modules/Words/store/wordsSice";
import { ITipWord } from "@/modules/Words/store/tipWord/tipWordType";
import  tipWordSlice  from "@/modules/Words/store/tipWord/tipWordSlice";
import { IWordsFilters } from "@/modules/WordsFilters/store/wordsFiltersType";
import  wordsFiltersSlice  from "@/modules/WordsFilters/store/wordsFiltersSlice";

export interface IState{
    app:IAppState
    lists:ILists
    listsArea:IListsArea
    words:IWords
    tipWord:ITipWord
    wordsFilters:IWordsFilters
}

export const store = configureStore({
    reducer: {
        app: appSlice,
        lists:listsSlice,
        listsArea:listsAreaSlice,
        words:wordsSlice,
        tipWord:tipWordSlice,
        WordsFilters:wordsFiltersSlice,
    },
})

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch;
