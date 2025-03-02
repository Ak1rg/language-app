'use client';
import { FC, MouseEvent,useEffect,useState } from "react"
import { IWordsArrayFilters } from "../../store/wordsFiltersType";
import { addArrayFilters, removeArrayFilters } from "../../store/wordsFiltersSlice";
import { useAppDispatch } from "@/store/store";
import TagCreateButton from "../../ui/TagCreateButton";

interface IProps {
    filterValue:keyof IWordsArrayFilters 
    array:string[]
    actualArray:string[]
    filterName:string
}

const CustomArraySelect:FC<IProps> = ({filterValue,array,actualArray,filterName}) => {

    const dispatch = useAppDispatch()

    const [openSelect, setOpenSelect] = useState(false)

    const pStyle = `text-white text-[20px]`

    const divStyle = `flex items-center bg-grayBg hover:bg-lightGrayBg py-[5px] px-[10px] gap-[5px] duration-200
    cursor-pointer`

    const changeOpenSelect = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation(); 
        setOpenSelect(!openSelect);
    };

    const changeActualValue = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation(); 
        const value = e.currentTarget.innerText;
        if (!actualArray.includes(value)) {
            dispatch(addArrayFilters({ filed: filterValue, value: value }));
        } else {
            dispatch(removeArrayFilters({ filed: filterValue, value: value }));
        }
    };

    const clickOutside = (event: globalThis.MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest('.customArraySelect')) {
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
        <div onClick={changeOpenSelect} className={`relative select-none customArraySelect w-[150px]`}>
            <div className={`flex justify-center items-center gap-[5px] bg-grayBg border-[2px] ${openSelect?' border-lightGrayBg':'border-grayBg'} 
            border-grayBg rounded-[5px] px-[10px] py-[5px] cursor-pointer`}>
                <p className='text-white text-[20px]'>{filterName}</p>
                <svg className={`${openSelect?'rotate-90':'-rotate-90'} w-[30px] h-[30]px duration-200`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#ffffff"></path></g></svg>
            </div>
            {openSelect&&
                <div className={`w-full absolute top-[40px] left-0 z-[3] rounded-b-[5px] overflow-hidden border-t-grayBg border-[2px] border-lightGrayBg`}>
                    {
                        array.length===0?
                        <TagCreateButton/>
                        :
                        array.map((e,i) => (
                            <div key={i} className={divStyle} onClick={changeActualValue}>
                                <div className="border-[2px] border-lightGrayBg rounded-[5px]">
                                    <svg className={`${!actualArray.includes(e)&&'opacity-0'}`} xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                        <g id="SVGRepo_iconCarrier"> <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>
                                    </svg>
                                </div>
                                <p className={pStyle}>{e}</p>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default CustomArraySelect