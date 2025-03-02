export interface IWords {
    wordsList:IWord[]
    draggableValue:boolean
    wordModalOpen:boolean
    wordModalWord:IWord|null
    addWordModal:boolean
    tagModal:boolean
    wordModalIndex:number
}

export interface IWord{
    word:string
    translate:string
    source:string
    sourceTranslate?:string
    timeCreate:string
    tags:string[]
}