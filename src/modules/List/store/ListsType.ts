export interface ILists {
    lists:IList[]
    draggableList:IAchievement[]
    draggable:boolean
    sortingValue:string
}

export interface IList {
    name:string
    list:IAchievement[]
}

export interface IAchievement {
    name:string
    done:boolean
    createTime:string
    doneTime:string
}