'use client';
import { addWord, changeAddWordModal } from '@/modules/Words/store/wordsSice';
import { IWord } from '@/modules/Words/store/wordsType'
import { useAppDispatch, useAppSelector } from '@/store/store';
import { useEffect, useState } from 'react'

const ModalNewWord = () => {

    const dispatch = useAppDispatch()

    const addWordModalValue = useAppSelector(s => s.words.addWordModal)

    const getTimeCreate = () => {
        const date = new Date()
        const year = String(date.getFullYear()).slice(2)
        const month = String(date.getMonth()+1).padStart(2)
        const day = String(date.getDate()).padStart(2)
        const hours = String(date.getHours()).padStart(2)
        const minutes = String(date.getMinutes()).padStart(2)
        const seconds = String(date.getSeconds()).padStart(2)
        return `${year}:${month}:${day}:${hours}:${minutes}:${seconds}`
    }

    const [newWord, setNewWord] = useState<IWord>({
        word:'',
        translate:'',
        source:'',
        sourceTranslate:'',
        timeCreate:getTimeCreate(),
    })

    const changeString = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewWord((prevWord) => ({ ...prevWord, [e.target.name]: e.target.value }))
    }

    const createWord = () => {
        dispatch(addWord(newWord))
        dispatch(changeAddWordModal(false))
    }

    const clickOutside = (event: globalThis.MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest('.addWordModal')) {
            dispatch(changeAddWordModal(false))
        }
    };

    useEffect(() => {
            if(addWordModalValue){
                document.addEventListener('click', clickOutside);
            }
            return () => {
                document.removeEventListener('click', clickOutside);
            };
        }, [addWordModalValue]);

    if(!addWordModalValue) return null

    return (
        <div className={`absolute left-0 top-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center`}>
            <div className='addWordModal bg-grayBg w-[80%] h-[80%] rounded-[20px] p-[10px] flex flex-col items-center gap-[40px] overflow-y-scroll scrollbar-hidden'>
                <h2 className='text-white text-[40px] text-center'>New Word</h2>
                <div className='flex items-center gap-[10px]'>
                    <p className='text-white text-[26px] w-[187px] text-left'>Word</p>
                    <input 
                        onChange={changeString}
                        name='word'
                        className='outline-none text-white text-[20px] bg-transparent rounded-[5px] border-white border px-[10px] py-[3px]' type="text" 
                    />
                </div>
                <div className='flex items-center gap-[10px]'>
                    <p className='text-white text-[26px] w-[187px] text-left'>Translate</p>
                    <input 
                        onChange={changeString}
                        name='translate'
                        className='outline-none text-white text-[20px] bg-transparent rounded-[5px] border-white border px-[10px] py-[3px]' type="text" 
                    />
                </div>
                <div className='flex items-center gap-[10px]'>
                    <p className='text-white text-[26px] w-[187px] text-left'>Source</p>
                    <input 
                        onChange={changeString}
                        name='source'
                        className='outline-none text-white text-[20px] bg-transparent rounded-[5px] border-white border px-[10px] py-[3px]' type="text" 
                    />
                </div>
                <div className='flex items-center gap-[10px]'>
                    <p className='text-white text-[26px] w-[187px] text-left'>Source Translate</p>
                    <input 
                        onChange={changeString}
                        name='sourceTranslate'
                        className='outline-none text-white text-[20px] bg-transparent rounded-[5px] border-white border px-[10px] py-[3px]' type="text" 
                    />
                </div>
                <button
                    onClick={createWord}
                    className='rounded-[5px] text-white px-[20px] py-[10px] hover:bg-lightGrayBg duration-200'>
                    Add Word
                </button>
            </div>
        </div>
    )
}

export default ModalNewWord