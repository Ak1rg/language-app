import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAchievement, ILists } from './ListsType';


const initialState: ILists = {
    lists:[
        {
            name:'gym',
            list:[
                {
                    name:'agym1',
                    done:true,
                    createTime:'23:12:02:12:23',
                    doneTime:''
                },
                {
                    name:'bgym2',
                    done:false,
                    createTime:'23:12:02:12:23',
                    doneTime:'Not finished'
                },
                {
                    name:'gym3',
                    done:false,
                    createTime:'23:12:02:12:23',
                    doneTime:'Not finished'
                },
                {
                    name:'gym4',
                    done:false,
                    createTime:'23:12:02:12:23',
                    doneTime:'Not finished'
                },
                {
                    name:'gym5',
                    done:false,
                    createTime:'23:12:02:12:23',
                    doneTime:'Not finished'
                },
                {
                    name:'gym6',
                    done:false,
                    createTime:'23:12:02:12:23',
                    doneTime:'Not finished'
                },
                {
                    name:'gym7',
                    done:false,
                    createTime:'23:12:02:12:23',
                    doneTime:'Not finished'
                },
                {
                    name:'gym8',
                    done:false,
                    createTime:'23:12:02:12:23',
                    doneTime:'Not finished'
                },
                {
                    name:'gym9',
                    done:false,
                    createTime:'23:12:02:12:23',
                    doneTime:'Not finished'
                },
                {
                    name:'gym10',
                    done:false,
                    createTime:'23:12:02:12:23',
                    doneTime:'Not finished'
                },
                {
                    name:'gym11',
                    done:false,
                    createTime:'23:12:02:12:23',
                    doneTime:'Not finished'
                },
                {
                    name:'gym12',
                    done:false,
                    createTime:'23:12:02:12:23',
                    doneTime:'Not finished'
                },
                {
                    name:'gym13',
                    done:false,
                    createTime:'23:12:02:12:23',
                    doneTime:'Not finished'
                },
            ]
        },
        {
            name:'stretch',
            list:[
                {
                    name:'gym1',
                    done:false,
                    createTime:'23:12:02:12:23',
                    doneTime:'Not finished'
                },
                {
                    name:'gym2',
                    done:false,
                    createTime:'23:12:02:12:23',
                    doneTime:'Not finished'
                },
                {
                    name:'gym3',
                    done:false,
                    createTime:'23:12:02:12:23',
                    doneTime:'Not finished'
                },
            ]
        },
        {
            name:'game',
            list:[
                {
                    name:'gym1',
                    done:false,
                    createTime:'23:12:02:12:23',
                    doneTime:'Not finished'
                },
                {
                    name:'gym2',
                    done:false,
                    createTime:'23:12:02:12:23',
                    doneTime:'Not finished'
                },
                {
                    name:'gym3',
                    done:false,
                    createTime:'23:12:02:12:23',
                    doneTime:'Not finished'
                },
            ]
        },
        {
            name:'programming',
            list:[
                {
                    name:'gym1',
                    done:false,
                    createTime:'23:12:02:12:23',
                    doneTime:'Not finished'
                },
                {
                    name:'gym2',
                    done:false,
                    createTime:'23:12:02:12:23',
                    doneTime:'Not finished'
                },
                {
                    name:'gym3',
                    done:false,
                    createTime:'23:12:02:12:23',
                    doneTime:'Not finished'
                },
            ]
        },
    ],
    draggableList:[],
    draggable:false,
    sortingValue:'Newly',
}

export const listsSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        updateAchieve(state, action: PayloadAction<{ listName: string; itemName: string }>) {
            const { listName, itemName } = action.payload;
            const listIndex = state.lists.findIndex((list) => list.name === listName);
            if (listIndex !== -1) {
                const itemIndex = state.lists[listIndex].list.findIndex(
                    (item) => item.name === itemName
                );
                if (itemIndex !== -1) {
                    state.lists[listIndex].list[itemIndex].done =
                        !state.lists[listIndex].list[itemIndex].done;
                }
            }
        },
        moveItem(state, action: PayloadAction<{ oldIndex: number; newIndex: number; listName: string }>) {
            const {oldIndex,newIndex,listName} = action.payload;
            const listId = state.lists.findIndex(list => list.name === listName) 
            const [movedItem] = state.lists[listId].list.splice(oldIndex, 1);
            state.lists[listId].list.splice(newIndex, 0, movedItem);
        },
        changeList(state,action:PayloadAction<{listName:string,list:IAchievement[]}>) {
            const {listName,list} = action.payload;
            const listId = state.lists.findIndex(list => list.name === listName) 
            state.lists[listId].list = list;
        },
        changeDraggable(state,action:PayloadAction<boolean>) {
            state.draggable = action.payload
        },
        changeSortingValue(state,action:PayloadAction<string>) {
            state.sortingValue = action.payload
        },
    },
})

export const { updateAchieve,moveItem,changeList,changeDraggable,changeSortingValue } = listsSlice.actions

export default listsSlice.reducer