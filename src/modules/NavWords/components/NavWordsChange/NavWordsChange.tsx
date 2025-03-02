'use client';
import { changeWordsDraggable } from '@/modules/Words/store/wordsSice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import React from 'react'

const NavWordsChange = () => {

    const dispatch = useAppDispatch()
    const draggableValue = useAppSelector(s => s.words.draggableValue)

    const changeDraggable = () => {
        dispatch(changeWordsDraggable(!draggableValue))
    }

    return (
        <button 
            onClick={changeDraggable} 
            className={`bg-grayBg border-solid border-[1px] h-[35px] rounded-[5px] px-[10px] text-white 
                ${draggableValue ? 'border-[white]' : 'border-grayBg'} 
                hover:bg-lightGrayBg duration-200 select-none`}
            >
            Change
        </button>
    )
}

export default NavWordsChange