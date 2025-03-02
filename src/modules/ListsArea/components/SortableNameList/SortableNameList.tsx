'use client';
import { FC } from 'react'
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useEffect, useState, memo } from 'react';
import { useRouter } from 'next/navigation';

interface IProps {
    routerName:string
    name:string
}

const SortableNameList:FC<IProps> = memo(({routerName,name}) => {

    const router = useRouter()

    const [isDragging, setIsDragging] = useState(false); 
    const { attributes, listeners, setNodeRef, transform,transition, isDragging:activeDragging } = 
    useSortable({ id: name,
        transition: {
            duration: 150, 
            easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        },
    });

    useEffect(() => {
        setIsDragging(activeDragging);
    }, [activeDragging]);

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div  
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            onClick={() => router.push(routerName)}
            className='bg-grayBg rounded-[5px] px-[15px] py-[8px] text-white cursor-pointer hover:bg-lightGrayBg duration-100'>
            {name}
        </div>
    )
})

export default SortableNameList