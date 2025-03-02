'use client';
import { useAppSelector } from '@/store/store'
import SideBarWideHideButton from '@/modules/SideBar/components/SideBarWideHideButton/SideBarWideHideButton'
import React from 'react'
import { useRouter } from 'next/navigation';
import SideBarButton from './components/SideBarButton/SideBarButton';
import useRoutes from '@/hooks/useRoutes';

const SideBar = () => {

    const sideBarWideValue = useAppSelector(s => s.app.sideBarWide)
    const routes = useRoutes()

    const router = useRouter()

    return (
        <nav className={`${sideBarWideValue?'w-[18%] px-[20px]':'w-[46px]'} duration-200 relative bg-grayBg w-[18%] h-[100vh] flex flex-col justify-between py-[50px]`}>
            <SideBarWideHideButton/>
            <div className='flex flex-col gap-[10px] w-full items-center'>
                {
                    Object.entries(routes).map(([key,value],i:number) => (
                        <SideBarButton key={i} name={key} onClick={() =>{ 
                            router.prefetch(`${value}`)
                            router.push(`${value}`)
                        }}/>
                    ))
                }
            </div>
            <div className='flex flex-col gap-[10px] w-full items-center'>
                <SideBarButton name='settings'/>
                <SideBarButton name='profile'/>
            </div>
        </nav>
    )
}

export default SideBar