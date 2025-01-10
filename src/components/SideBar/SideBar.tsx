import SideBarButton from '@/ui/SideBatButton/SideBarButton'
import React from 'react'

const SideBar = () => {
    return (
        <nav className='bg-[#1E1E1E] w-[18%] h-[100vh] flex flex-col justify-between px-[20px] py-[50px]'>
            <div className='flex flex-col gap-[10px]'>
                <SideBarButton img='list' name='List'/>
            </div>
            <div className='flex flex-col gap-[10px]'>
                <SideBarButton img='setting' name='Settings'/>
                <SideBarButton img='profile' name='Profile'/>
            </div>
        </nav>
    )
}

export default SideBar