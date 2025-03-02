import { changeSortingValue } from '@/modules/List/store/ListsSlice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import React from 'react'
import useSortingList from '../../hooks/useSortingList'

const SortingSelector = () => {

    const dispatch = useAppDispatch()
    const sortingValue = useAppSelector(s => s.lists.sortingValue)
    const doSortingList = useSortingList()

    const changeSortValue = (e:any) => {
        doSortingList(e.target.innerText)
        dispatch(changeSortingValue(e.target.innerText)) 
    }

    return (
        <div className='relative flex items-center justify-center cursor-pointer select-none w-[95px] h-[35px] bg-grayBg 
        rounded-[5px] px-[10px] text-white  hover:bg-lightGrayBg duration-200 group'>
            <h4>{sortingValue}</h4>
            <ul className='group-hover:visible invisible absolute top-[35px] left-0 bg-grayBg border-solid border-[1px] border-white py-[5px] rounded-[5px]'>
                <li onClick={changeSortValue} className='px-[10px] w-[95px] py-[2px] hover:bg-lightGrayBg'>Oldest</li>
                <li onClick={changeSortValue} className='px-[10px] w-[95px] py-[2px] hover:bg-lightGrayBg'>Newly</li>
                <li onClick={changeSortValue} className='px-[10px] w-[95px] py-[2px] hover:bg-lightGrayBg'>Name A-Z</li>
                <li onClick={changeSortValue} className='px-[10px] w-[95px] py-[2px] hover:bg-lightGrayBg'>Name Z-A</li>
            </ul>
        </div>
    )
}

export default SortingSelector