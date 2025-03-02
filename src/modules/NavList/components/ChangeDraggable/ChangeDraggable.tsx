import { changeDraggable } from '@/modules/List/store/ListsSlice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import React from 'react'

const ChangeDraggableButton = () => {

    const dispatch = useAppDispatch()
    const draggableValue = useAppSelector(s => s.lists.draggable)

    const changeDraggableValue = () => {
        dispatch(changeDraggable(!draggableValue));
    }

    return (
        <button 
            onClick={changeDraggableValue} 
            className={`bg-grayBg border-solid border-[1px] h-[35px] rounded-[5px] px-[10px] text-white 
                ${draggableValue ? 'border-[white]' : 'border-grayBg'} 
                hover:bg-lightGrayBg duration-200 select-none`}
            >
            Change
        </button>
    )
}

export default ChangeDraggableButton