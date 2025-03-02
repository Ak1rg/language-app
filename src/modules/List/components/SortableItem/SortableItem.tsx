'use client';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import CheckInput from '../CheckInput/CheckInput';
import { useEffect, useState, memo } from 'react';

const SortableItem = memo(({ id, item }: { id: string; item: any }) => {
    const [isDragging, setIsDragging] = useState(false); 
    const { attributes, listeners, setNodeRef, transform,transition, isDragging: activeDragging } =
        useSortable({ id,
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
            className='w-full flex items-center justify-between border-grayBg border-[1px] border-solid bg-grayBg rounded-[5px] px-[15px] py-[8px] text-white '
        >
            <p className={`select-none ${item.done&&'line-through text-gray-500'}`}>{id}</p>
            <CheckInput itemName={id}/>
        </div>
    );
});

export default SortableItem;