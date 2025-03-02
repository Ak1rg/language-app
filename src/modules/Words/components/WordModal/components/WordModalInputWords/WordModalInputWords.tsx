import { useAppDispatch, useAppSelector } from '@/store/store'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { changeWord } from '../../../../store/wordsSice'

const WordModalInputWords = () => {

    const dispatch = useAppDispatch()

    const fullWord = useAppSelector(s => s.words.wordModalWord) 

    if(fullWord===null) return

    const [change, setchange] = useState(false)
    const [changeableString, setChangeableString] = useState('')

    const word = useRef(fullWord.word)
    const wordTranslate = useRef(fullWord.translate)

    const openString = (value:string) => {
        setchange(true)
        setChangeableString(value)
    }

    const changeString = (e:ChangeEvent<HTMLInputElement>) => {
        if(changeableString==='word'){
            word.current = e.target.value
        } else {
            wordTranslate.current = e.target.value
        }
    }

    const sendData = () => {
        setchange(false)
        dispatch(changeWord({
            field:changeableString==='word'?'word':'translate',
            value:changeableString==='word'?word.current:wordTranslate.current,
        }))
    }

    const clickOutside = (e:globalThis.MouseEvent) => {
        const target = e.target as HTMLElement
        if(!target.closest('.input-open')){
            sendData()
        }
    }

    const enterClick = (event:KeyboardEvent) => {
        if(event.key==='Enter'){
            sendData()
        }
    }

    useEffect(() => {
        if(change){
            document.addEventListener('click',clickOutside)
            document.addEventListener('keydown',enterClick)
        }
        return () => {
            document.removeEventListener('click',clickOutside)
            document.removeEventListener('keydown',enterClick)
        }
    },[change])

    return (
        <>
            {
                change?
                <input className={`${change&&'input-open'} bg-transparent border border-lightGrayBg rounded-[5px] text-[40px]
                text-white px-[10px] h-[60px]`} type="text" defaultValue={changeableString==='word'?word.current:wordTranslate.current} onChange={changeString} />
                :
                <h3 className="text-white text-[40px] flex gap-[5px]">
                    <span onDoubleClick={() => openString('word')}>{word.current}</span>
                    -
                    <span onDoubleClick={() => openString('translate')}>{wordTranslate.current}</span>
                </h3>
            }
        </>
    )
}

export default WordModalInputWords