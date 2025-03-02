import orderFilterFunc from "../FiltersFunctions/OrderFilterFunc"
import tagFilterFunc from "../FiltersFunctions/TagFilter"

const wordsArr = [
    {
        word: "river",
        translate: "река",
        source: "Река течет между горами",
        sourceTranslate: "The river flows between the mountains",
        timeCreate: "25:02:10:12:00:22",
        tags:['lol','kek']
    },
    {
        word: "bird",
        translate: "птица",
        source: "Птица летит над озером",
        sourceTranslate: "The bird flies over the lake",
        timeCreate: "25:02:10:12:00:23",
        tags:['lol','kek']
    },
    {
        word: "bridge",
        translate: "мост",
        source: "Мост соединяет два берега",
        sourceTranslate: "The bridge connects two shores",
        timeCreate: "25:02:10:12:00:21",
        tags:['lol']
    },
] 

describe('words filters:order ',() => {

    const filtersValues = ['A-Z','Z-A','Newly','Oldest',]

    test(`${filtersValues[0]} test`,() => {
        const firstTestArr = [wordsArr[1],wordsArr[2],wordsArr[0]]
        expect(orderFilterFunc(wordsArr,filtersValues[0])).toEqual(firstTestArr)
    })
    test(`${filtersValues[1]} test`,() => {
        const secondTestArr = [wordsArr[0],wordsArr[2],wordsArr[1]]
        expect(orderFilterFunc(wordsArr,filtersValues[1])).toEqual(secondTestArr)
    })
    test(`${filtersValues[2]} test`,() => {
        const thirdTestArr = [wordsArr[1],wordsArr[0],wordsArr[2]]
        expect(orderFilterFunc(wordsArr,filtersValues[2])).toEqual(thirdTestArr)
    })
    test(`${filtersValues[3]} test`,() => {
        const fourthTestArr = [wordsArr[2],wordsArr[0],wordsArr[1]]
        expect(orderFilterFunc(wordsArr,filtersValues[3])).toEqual(fourthTestArr)
    })
})

describe('words filters:tags ',() => {
    test(`tag test %i`,() => {
        const firstTestArr = [wordsArr[0],wordsArr[1]]
        const actualTags = ['lol','kek']
        expect(tagFilterFunc(wordsArr,actualTags)).toEqual(firstTestArr)
    })
    test(`tag test %i`,() => {
        const actualTags = ['lol']
        expect(tagFilterFunc(wordsArr,actualTags)).toEqual(wordsArr)
    })
    test(`tag test %i`,() => {
        const actualTags:string[] = []
        expect(tagFilterFunc(wordsArr,actualTags)).toEqual(wordsArr)
    })
})