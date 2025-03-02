'use client';
import React, { FC, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useAppSelector } from '@/store/store';

interface IProps {
    name: string;
    onClick?: () => void; 
}

const SideBarButton:FC<IProps> = ({name,onClick}) => {

    const spanRef = useRef<HTMLSpanElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const [buttonWidth, setButtonWidth] = useState<Number>(0);
    const [spanWidth, setSpanWidth] = useState<Number>(0);

    const sideBarWideValue = useAppSelector(s => s.app.sideBarWide)

    const getName = (name:string) => {
        const firstLetter = name.charAt(0).toUpperCase()
        const otherLetters = name.slice(1)
        return firstLetter+otherLetters
    }

    useEffect(() => {
        if (buttonRef.current) {
            setButtonWidth(buttonRef.current.offsetWidth);  
        }
        if (spanRef.current) {
            setSpanWidth(spanRef.current.offsetWidth);  
        }
    }, []);

    return (
        <button
            onClick={onClick}
            ref={buttonRef}
            className={`${sideBarWideValue?'px-[10px] rounded-[10px] w-full justify-start':'justify-center w-[34px] rounded-[5px] px-[3px]'} group 
            flex hover:bg-lightGrayBg transition-all duration-300 py-[5px] `}
            style={{ '--button-width': `${buttonWidth}px` } as React.CSSProperties}
            >
            <span
                ref={spanRef}
                className={`${sideBarWideValue?'group-hover:translate-x-[calc(var(--button-width)_/_2_-_var(--span-width)_/_2_-_10px)]':'justify-center'}
                inline-flex items-center gap-[5px] transition-transform duration-300`}
                style={{ '--span-width': `${spanWidth}px` } as React.CSSProperties}
            >
                <Image width={20} height={20} src={`/img/sideBar/${name}.svg`} alt="List Icon" />
                {sideBarWideValue&&
                    <p className="text-white text-[20px] font-[400] leading-[26px]">{getName(name)}</p>
                }
            </span>
        </button>
    );
};

export default SideBarButton;