export interface IWordsFilters {
    selectFilters:IWordsSelectFilters
    arrayFilters:IWordsArrayFilters
    tags:string[]
}

export interface IWordsSelectFilters {
    orderFilter:string
}

export interface IWordsArrayFilters {
    tagFilter:string[]
}