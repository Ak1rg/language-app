'use client';
import { useAppDispatch } from '@/store/store';
import { MouseEvent, useEffect, useState } from 'react'
import { changeSelectFilters } from '../../store/wordsFiltersSlice';
import { IWordsSelectFilters } from '../../store/wordsFiltersType';


const CustomSelect = ({filterValue,array}:{filterValue:keyof IWordsSelectFilters,array:string[]}) => {

    const dispatch = useAppDispatch()

    const [actualValue, setActualValue] = useState(array[0])
    const [openSelect, setOpenSelect] = useState(false)

    const pStyle = `bg-grayBg text-white text-[20px] py-[5px] px-[10px] hover:bg-lightGrayBg cursor-pointer
    duration-200`

    const changeOpenSelect = () => {
        setOpenSelect(!openSelect)
    }

    const changeActualValue = (e:MouseEvent<HTMLParagraphElement>) => {
        const value = e.currentTarget.innerText
        setActualValue(value)
        dispatch(changeSelectFilters({field:filterValue,value:value}))
    }

    const clickOutside = (event: globalThis.MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.customSelect')) {
                setOpenSelect(false)
            }
        };
    
    useEffect(() => {
        if(openSelect){
            document.addEventListener('click', clickOutside);
        }
        return () => {
            document.removeEventListener('click', clickOutside);
        };
    }, [openSelect]);


    return (
        <div onClick={changeOpenSelect} className='relative select-none customSelect'>
            <div className={`flex items-center gap-[5px] bg-grayBg border-[2px] ${openSelect?' border-lightGrayBg':'border-grayBg'} 
            border-grayBg rounded-[5px] px-[10px] py-[5px] cursor-pointer `}>
                <p className='text-white text-[20px]'>{actualValue}</p>
                <svg className={`${openSelect?'rotate-90':'-rotate-90'} w-[30px] h-[30]px duration-200`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#ffffff"></path></g></svg>
            </div>
            {openSelect&&
                <div className='w-full absolute top-[40px] left-0 z-[3] rounded-b-[5px] overflow-hidden border-t-grayBg border-[2px] border-lightGrayBg'>
                    {
                        array.filter(e => e!==actualValue).map((e,i) => (
                            <p key={i} onClick={changeActualValue} className={pStyle}>{e}</p>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default CustomSelect