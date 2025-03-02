import { IWord } from "@/modules/Words/store/wordsType";

const orderFilterFunc = (list:IWord[],orderFilterSortingValue:string) => {

    let sortedArray = [...list]
    const getTime = (el: string) => {
        const [year, month, day, hours, minutes, seconds] = el.split(":").map(Number);
        return (
            year * 365 * 24 * 60 * 60 + 
            month * 30 * 24 * 60 * 60 +  
            day * 24 * 60 * 60 +       
            hours * 60 * 60 +           
            minutes * 60 +               
            seconds             
        );
    };

    switch (orderFilterSortingValue) {
        case 'Newly':
            sortedArray.sort((a, b) => {
                return getTime(b.timeCreate) - getTime(a.timeCreate); 
            })
            break
        case 'Oldest':
            sortedArray.sort((a, b) => {
                return getTime(a.timeCreate) - getTime(b.timeCreate);  
            })
            break
        case 'A-Z':
            sortedArray.sort((a, b) => {
                return a.word.localeCompare(b.word);  
            })
            break
        case 'Z-A':
            sortedArray.sort((a, b) => {
                return b.word.localeCompare(a.word);  
            })
            break
    }
    return sortedArray
}

export  default orderFilterFunc