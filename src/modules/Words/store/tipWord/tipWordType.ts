import { IWord } from "../wordsType"

export interface ITipWord {
    tipOpen:boolean
    tipTimeout:number|null
    pos:IWordPos
    word:IWord|null
}

export interface IWordPos {
    x:number|null
    y:number|null
}