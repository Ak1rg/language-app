import { IWord } from "@/modules/Words/store/wordsType";

const tagFilterFunc = (list:IWord[],actualTags:string[]) => {
    if (actualTags.length === 0) return list;
    let filteredList = [...list]; 
    for (const tag of actualTags) {
        filteredList = filteredList.filter(e => e.tags?.includes(tag)); 
        if (filteredList.length === 0) break; 
    }
    return filteredList;
}


export  default tagFilterFunc