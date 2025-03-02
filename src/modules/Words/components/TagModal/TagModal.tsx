import { useAppDispatch, useAppSelector } from '@/store/store';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { changeTagModal } from '../../store/wordsSice';
import { changeTagsArray } from '@/modules/WordsFilters/store/wordsFiltersSlice';

const TagModal = () => {

    const dispatch = useAppDispatch()

    const [inputValue, setInputValue] = useState<string>('')

    const openTagModal = useAppSelector(s => s.words.tagModal)

    const createTag = () => {
        dispatch(changeTagsArray(inputValue))
        dispatch(changeTagModal(false))
    }

    const changeInputValue = (e:ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const clickOutside = (event: globalThis.MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest('.tagModal')) {
            dispatch(changeTagModal(false))
        }
    };
    
    useEffect(() => {
        if(openTagModal){
            document.addEventListener('click', clickOutside);
        }
        return () => {
            document.removeEventListener('click', clickOutside);
        };
    }, [openTagModal]);
    
    if (!openTagModal) return

    return (
        <div className='w-[100%] h-[100%] absolute top-0 left-0 bg-black bg-opacity-60 flex items-center justify-center'>
            <div className='bg-grayBg rounded-[20px] tagModal py-[30px] px-[70px] flex flex-col items-center gap-[20px]'>   
                <h1 className='text-[40px] text-white text-center'>Create new tag</h1>
                <input type="text" onChange={changeInputValue} className='max-w-[300px] w-full focus:bg-lightGrayBg outline-none bg-transparent
                text-white rounded-[10px] px-[20px] py-[10px] border-[1px] border-[solid]
                border-lightGrayBg duration-200'/>
                <button 
                    onClick={createTag}
                    className='max-w-[150px] w-full text-white rounded-[10px] px-[20px] py-[10px] border-[1px]
                    border-[solid] border-lightGrayBg hover:bg-lightGrayBg duration-200'
                >
                    Create tag
                </button>
            </div>
        </div>
    )
}

export default TagModal