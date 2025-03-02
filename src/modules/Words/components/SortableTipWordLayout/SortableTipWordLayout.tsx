'use client';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { changeTipTimeout, changeTipWord } from '../../store/tipWord/tipWordSlice';
import { useRef, useState } from 'react';
import { IWord } from '../../store/wordsType';
import WordTip from '../WordTip/WordTip';

const SortableTipWordLayout = ({word,children}:{word:IWord,children:React.ReactNode}) => {

    const dispatch = useAppDispatch()

    const tipTimeout = useAppSelector(s => s.tipWord.tipTimeout)
    
    const setTime = useRef<number | null>(null);

    const [pos, setpos] = useState({x:0,y:0})
    const [tipOpen, settipOpen] = useState(false)

    const onMouseEnter = () => {
        if (tipTimeout) clearTimeout(tipTimeout);
        if (setTime.current) clearTimeout(setTime.current);

        setTime.current = window.setTimeout(() => {
            settipOpen(true)
            dispatch(changeTipWord(word))
        }, tipTimeout ? 0 : 1000);

        dispatch(changeTipTimeout(setTime.current));
    };

    const onMouseLeave = () => {
        if (setTime.current) clearTimeout(setTime.current);

        setTime.current = window.setTimeout(() => {
            dispatch(changeTipTimeout(null))
        }, 200);

        dispatch(changeTipWord(null))
        settipOpen(false)
        dispatch(changeTipTimeout(setTime.current));
    };

    const mouseMove = (e: React.MouseEvent) => {
        setpos({ x: e.clientX + 127, y: e.clientY });
    };

    return (

        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseMove={mouseMove}
        >
            {children}
            {(pos.x !== 0 && pos.y !== 0) && (
                <WordTip pos={pos} tipOpen={tipOpen} word={word} />
            )}
        </div>
    )
}

export default SortableTipWordLayout