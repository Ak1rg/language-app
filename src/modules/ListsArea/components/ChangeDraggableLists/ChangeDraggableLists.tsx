'use client';
import { useAppDispatch, useAppSelector } from '@/store/store'
import { changeListsDraggable } from '../../store/listsAreaSlice';

const ChangeDraggableListsButton = () => {

    const dispatch = useAppDispatch()
    const draggableListsValue = useAppSelector(s => s.listsArea.listsDraggable)

    const changeDraggableValue = () => {
        dispatch(changeListsDraggable(!draggableListsValue));
    }

    return (
        <button 
            onClick={changeDraggableValue} 
            className={`bg-grayBg border-solid border-[1px] h-[35px] rounded-[5px] px-[10px] text-white 
                ${draggableListsValue ? 'border-[white]' : 'border-grayBg'} 
                hover:bg-lightGrayBg duration-200 select-none`}
            >
            Change
        </button>
    )
}

export default ChangeDraggableListsButton