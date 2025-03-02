import { addTag, deleteTag } from '@/modules/Words/store/wordsSice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import  { useEffect, useState } from 'react'

const WordModalTags = () => {

    const dispatch = useAppDispatch()

    const [changableTags, setChangableTags] = useState<boolean>(false)

    const actualWordIndex = useAppSelector(s => s.words.wordModalIndex)
    const actualWord = useAppSelector(s => s.words.wordsList[actualWordIndex])
    const allTags = useAppSelector(s => s.WordsFilters.tags)
    const addableTags = allTags.filter(e => !actualWord.tags?.includes(e))

    const removeTag = (tag:string) => {
        dispatch(deleteTag({sourceWord:actualWord.word,value:tag}))
    }

    const changeTag = () => {
        setChangableTags(!changableTags)
    }

    const createTag = (tagValue:string) => {
        dispatch(addTag({sourceWord:actualWord.word,value:tagValue}))
    }

    return (
        <>
            <div className='relative flex gap-[5px] border border-lightGrayBg rounded-[20px]'>
                <div onClick={changeTag} className='bg-grayBg duration-200 hover:bg-lightGrayBg border-lightGrayBg border min-w-[25px] w-[25px] h-[25px] cursor-pointer flex justify-center items-center rounded-[100%]'>
                    <img className={`${changableTags&&'rotate-45'} w-[18px] duration-75`} src="/img/words/plus.svg"  alt="" />
                </div>
                {
                    actualWord.tags.map((e,i) => (
                        <div key={i} className='flex items-center pl-[2px] pr-[8px] gap-[5px] bg-grayBg duration-200 border-lightGrayBg border rounded-[50px]'>
                            <div onClick={() => removeTag(e)} className='group flex items-center justify-center bg-lightGrayBg w-[19px] h-[19px] rounded-[100%] cursor-pointer'>
                                <img className='group-hover:opacity-90 w-[16px] rotate-45 opacity-0 duration-200' src="/img/words/plus.svg"  alt="" />
                            </div>
                            <p className='text-white'>{e}</p>
                        </div>
                    ))
                }

                {changableTags&&
                    <div className='top-[30px] tags absolute bg-lightGrayBg flex gap-[2px] rounded-[20px]'>
                    {
                        addableTags.length>0?
                        addableTags.map((e,i) => (
                            <div onClick={() => createTag(e)} key={i} className='flex items-center pl-[2px] pr-[8px] gap-[5px] bg-grayBg duration-200 border-lightGrayBg border rounded-[50px]'>
                                <div className='group flex items-center justify-center bg-lightGrayBg w-[19px] h-[19px] rounded-[100%] cursor-pointer'>
                                    <img className='group-hover:opacity-90 w-[16px] opacity-0 duration-200' src="/img/words/plus.svg"  alt="" />
                                </div>
                                <p className='text-white'>{e}</p>
                            </div>
                        ))
                        :
                        <p className='text-white px-[8px] py-[1px]'>No left tags</p>
                    }
                    </div>
                }
            </div>
        </>
    )
}

export default WordModalTags