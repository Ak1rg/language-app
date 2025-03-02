'use client';
import { useAppDispatch, useAppSelector } from '@/store/store'
import { useEffect } from 'react'
import { changeWordModalOpen, changeWordModalWord } from '../../store/wordsSice'
import WordModalInputWords from './components/WordModalInputWords/WordModalInputWords';
import WordModalInputString from './components/WordModalInputString/WordModalInputString';
import WordModalTags from './components/WordModalTags/WordModalTags';

const WordModal = () => {

    const dispatch = useAppDispatch()

    const wordModalOpen = useAppSelector(s => s.words.wordModalOpen) 

    const changeInfo = () => {
        dispatch(changeWordModalOpen(false));
        dispatch(changeWordModalWord(null));
    }

    const clickOutside = (event: globalThis.MouseEvent) => {
        const wordModal = document.querySelector('.wordModal')
        if (wordModal && !event.composedPath().includes(wordModal)) {
            changeInfo();
        }
    };

    useEffect(() => {
        if(wordModalOpen){
            document.addEventListener('click', clickOutside);
        }
        return () => {
            document.removeEventListener('click', clickOutside);
        };
    }, [wordModalOpen]);

    if(!wordModalOpen) return 

    return (
        <div
            className='flex items-center justify-center top-0 absolute bg-black bg-opacity-60 w-full h-full'
        >
            <div className='wordModal bg-grayBg w-[80%] h-[80%] rounded-[20px] px-[20px] py-[10px] '>
                <div className='flex justify-between'>
                    <WordModalInputWords/> 
                </div>  
                <div>
                    <WordModalInputString/>
                </div>
                <div className='flex justify-start'>
                    <WordModalTags/>
                </div>
            </div>  
        </div>
    )
}

export default WordModal