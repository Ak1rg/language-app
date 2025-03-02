import { changeWordModalIndex, changeWordModalOpen, changeWordModalWord } from '../../store/wordsSice';
import { useAppDispatch} from '@/store/store';
import { IWord } from '../../store/wordsType';
import { FC } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { colors } from '@/consts/colors';

interface IProps {
    word:IWord
}

const WordItem:FC<IProps> = ({word}) => {

    const dispatch = useAppDispatch()

    const { isDragging } = useDraggable({
        id: word.word,
    });

    const style = {
        border:`1px solid ${isDragging?'white':colors.grayBg}`,
        transition:'.1s',
        cursor:`${isDragging&&'grab'}`,
    };

    const open = () => {
        dispatch(changeWordModalOpen(true))
        dispatch(changeWordModalWord(word))
        dispatch(changeWordModalIndex(word.word))
    }

    return (
        <div
            style={style}
            onClick={open}
            className={`w-full flex items-center justify-between  bg-grayBg rounded-[5px] px-[15px] py-[8px] text-white `}
        >
            <p className='text-white'>{word.word}</p>
        </div>
    )
}

export default WordItem