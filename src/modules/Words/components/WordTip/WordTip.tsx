'use client';
import { useAppSelector } from "@/store/store";
import { useEffect, useRef, useState } from "react";
import { IWord } from "../../store/wordsType";

const WordTip = ({pos,word,tipOpen}:{word:IWord,tipOpen:boolean,pos:{x:number,y:number}}) => {

    const tip = useAppSelector(s => s.tipWord)
    const wordsDraggable = useAppSelector(s => s.words.draggableValue)

    const ref = useRef<HTMLDivElement>(null)

    const tipHidden = tipOpen && word.word === (tip.word!==null?tip.word.word:'') && pos.y!==0 && pos.x!==0 && !wordsDraggable

    const [tipHeight, setTipHeight] = useState(0);
    const [tipWidth, setTipWidth] = useState(0)
    const [tipSideLeft, setTipSideLeft] = useState(false)
    const [tipSideTop, setTipSideTop] = useState(true)

    const checkTipX = (x:number) => {
        const windowWidth = window.innerWidth;
        if (windowWidth - x <= 140) {
            setTipSideLeft(true)
            return x-255;  
        } else {
            setTipSideLeft(false)
            return x; 
        }
    };

    const checkTipY = (y:number,refOffsetHeight:number) => {
        const windowHeight = window.innerHeight;
        const refHeight = refOffsetHeight / 2
        if (windowHeight - y <= 200) {
            setTipSideTop(true)
            return y - refHeight;  
        } else {
            setTipSideTop(false)
            return y + refHeight; 
        }
    }

    useEffect(() => {
        if (ref.current && tipOpen) {
            setTipWidth(checkTipX(pos.x))
            setTipHeight(checkTipY(pos.y,ref.current.offsetHeight)); 
        }
    }, [pos,tipOpen]);


    return (
        <div 
            ref={ref}
            style={{
                left: `${tipWidth}px`,
                top: `${tipHeight}px`, 
                transform: "translate(-50%, -50%)", 
                pointerEvents: "none", 
            }}
            className={`${tipHidden?'':'hidden'} z-[1] ${tipSideLeft?'rounded-l-[10px]':'rounded-r-[10px]'}
            ${tipSideTop?'rounded-t-[10px]':'rounded-b-[10px]'} fixed flex flex-col 
            gap-[10px] px-[10px] py-[5px] w-[250px]
            border-white   
            border-[1px] border-solid bg-grayBg`}>
            <div className="flex items-center justify-between">
                <p className="text-white">{tip.word?.word} - {tip.word?.translate}</p>
                {/* <p className="text-white">{tip.word?.translate}</p> */}
            </div>
            <div className="flex flex-col gap-[5px]">
                <p className="text-white">{tip.word?.source}</p>
                <hr/>
                <p className="text-white">{tip.word?.sourceTranslate}</p>
            </div>
        </div>
    )
}

export default WordTip