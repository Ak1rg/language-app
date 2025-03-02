import React, { useEffect, useState } from 'react'
import ButtonBack from '../../components/ButtonBack/ButtonBack'
import ChangeDraggableButton from './components/ChangeDraggable/ChangeDraggable'
import DeleteListButton from './components/DeleteListButton/DeleteListButton'
import useListParam from '../List/hooks/useListParam'
import SortingSelector from './components/SortingSelector/SortingSelector'
import SkeletonBar from '../../ui/SkeletonBar/SkeletonBar'

const NavList = () => {

    const listParam = useListParam()
    const [loading, setloading] = useState(true)

    useEffect(() => {
        if(listParam!==undefined){
            setloading(false)
        }
    },[listParam])

    return (
        <div className="flex justify-between items-center mb-[10px]">
            <div className="flex items-center gap-[20px]">
                <ButtonBack/>
                <h1 className="text-white font-[600] text-[50px] leading-[1]">
                    {loading?<SkeletonBar w={'100px'} h={'50px'}/>:listParam}
                </h1>
            </div>
            <div className='flex items-center gap-[10px]'>
                <SortingSelector/>
                <ChangeDraggableButton/>
                <DeleteListButton/>
            </div>
        </div>
    )
}

export default NavList