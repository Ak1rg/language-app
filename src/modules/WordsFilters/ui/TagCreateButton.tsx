import { changeTagModal } from '@/modules/Words/store/wordsSice'
import { useAppDispatch } from '@/store/store'
import React from 'react'

const TagCreateButton = () => {

    const dispatch = useAppDispatch()

    const pStyle = `text-white text-[20px]`

    const divStyle = `flex items-center bg-grayBg hover:bg-lightGrayBg py-[5px] px-[10px] gap-[5px] duration-200
    cursor-pointer`

    const openModal = () => {
        dispatch(changeTagModal(true))
    }

    return (
        <div className={divStyle} onClick={openModal}>
            <p className={pStyle}>Add new tag</p>
        </div>
    )
}

export default TagCreateButton