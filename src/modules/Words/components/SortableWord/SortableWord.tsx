'use client';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { memo } from 'react';
import { IWord } from '../../store/wordsType';
import SortableTipWordLayout from '../SortableTipWordLayout/SortableTipWordLayout';
import WordItem from '../WordItem/WordItem';

const SortableWord = memo(({ word }: { word :IWord}) => {

    const { transition,attributes, listeners, setNodeRef, transform } =
        useSortable({ 
            id:word.word,
            transition: {
                duration: 150, 
                easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
            },
        });

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
            className='border-[0.1px] border-black rounded-[5px]'
        >
            <SortableTipWordLayout word={word}>
                <WordItem word={word} />
            </SortableTipWordLayout>
        </div>
    );
});

export default SortableWord;