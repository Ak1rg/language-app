'use client';
import { changeAddWordModal } from '@/modules/Words/store/wordsSice'
import { useAppDispatch } from '@/store/store'
import React from 'react'

const NavWordsAddWord = () => {


    const dispatch = useAppDispatch()

    const openModal = () => {
        dispatch(changeAddWordModal(true))
    }

    return (
        <button 
            onClick={openModal}
            className={`bg-grayBg border-solid border-[1px] h-[35px] rounded-[5px] px-[10px] text-white 
                border-grayBg hover:bg-lightGrayBg duration-200 select-none`}
        >
            Add word
        </button>
    )
}

export default NavWordsAddWord