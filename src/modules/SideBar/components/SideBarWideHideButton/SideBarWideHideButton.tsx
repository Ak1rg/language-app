'use client';
import { changeSideBarWide } from '@/store/reducers/appReducer'
import { useAppDispatch, useAppSelector } from '@/store/store'
import React from 'react'

const SideBarWideHideButton = () => {

    const dispatch = useAppDispatch()
    const sideBarWideValue = useAppSelector(s => s.app.sideBarWide)

    const changeSideWideValue = () => {
        dispatch(changeSideBarWide(!sideBarWideValue))
    }

    return (
        <button className='absolute top-[10px] right-[5px] px-[2px] hover:bg-lightGrayBg rounded-[5px] duration-200 tarnsition-all' onClick={changeSideWideValue}>
            <svg className={`${sideBarWideValue?'rotate-0':'rotate-180'} w-[30px] h-[30]px duration-200`} xmlns="http://www.w3.org/2000/svg" viewBox="-1 0 24 24" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#ffffff"></path></g></svg>
        </button>
    )
}

export default SideBarWideHideButton