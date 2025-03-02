import { changeWord } from '@/modules/Words/store/wordsSice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { ChangeEvent, useEffect, useRef, useState } from 'react'

const WordModalInputString = () => {

    const dispatch = useAppDispatch()
    const fullWord = useAppSelector(s => s.words.wordModalWord)

    if(fullWord===null) return

    const [change, setchange] = useState(false)
    const [changeableString, setChangeableString] = useState('')

    const stringSource = useRef(fullWord.source)
    const stringTranslate = useRef(fullWord.sourceTranslate)


    const openInput = (e:string) => {
        setChangeableString(e)
        setchange(true)
    }

    const changeString = (e:ChangeEvent<HTMLInputElement>) => {
        if(changeableString==='source'){
            stringSource.current = e.target.value
        } else {
            stringTranslate.current = e.target.value
        }
    }

    const sendData = () => {
        setchange(false)
        if(
            stringSource.current!==fullWord.source
            ||
            stringTranslate.current!==fullWord.sourceTranslate
        ){
            dispatch(changeWord({
                field:changeableString==='source'?'source':'sourceTranslate',
                value:changeableString==='source'?stringSource.current:stringTranslate.current??'',
            }))
        }
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
                change&&changeableString==='source'?
                <input
                    className={`${change && 'input-open'} bg-transparent border border-lightGrayBg rounded-[5px] text-[26px] text-white px-[10px] h-[39px]`}
                    type="text"
                    defaultValue={stringSource.current}
                    onChange={changeString}
                />
                :
                <p onDoubleClick={() => openInput('source')} className="text-white text-[26px] flex gap-[5px]">{stringSource.current}</p>
            }
            {
                change&&changeableString==='translate'?
                <input
                    className={`${change && 'input-open'} bg-transparent border border-lightGrayBg rounded-[5px] text-[26px] text-white px-[10px] h-[39px]`}
                    type="text"
                    defaultValue={stringTranslate.current}
                    onChange={changeString}
                />
                :
                <p onDoubleClick={() => openInput('translate')} className="text-white text-[26px] flex gap-[5px]">{stringTranslate.current}</p>
            }
        </>
    )
}

export default WordModalInputString