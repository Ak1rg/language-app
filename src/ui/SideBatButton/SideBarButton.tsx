'use client';
import React, { FC, useEffect, useRef, useState } from 'react';
import './SideBarButton.css'; 

interface IProps {
    img:string
    name:string
}

const SideBarButton:FC<IProps> = ({img,name}) => {
    const spanRef = useRef<HTMLSpanElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const [buttonWidth, setButtonWidth] = useState<Number>(0);
    const [spanWidth, setSpanWidth] = useState<Number>(0);

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
            ref={buttonRef}  
            className="group flex justify-start w-full hover:bg-[#313131] px-[10px] py-[5px] rounded-[10px] transition-all duration-300"
            style={{ '--button-width': `${buttonWidth}px` } as React.CSSProperties}
        >
            <span
                ref={spanRef}  
                className="side-bar-button-text"
                style={{ '--span-width': `${spanWidth}px` } as React.CSSProperties} 
            >
                <img width={20} height={20} src={`./img/achievements/${img}.svg`} alt="List Icon" />
                <p className="text-white text-[20px] font-[400] leading-[26px]">{name}</p>
            </span>
        </button>
    );
};

export default SideBarButton;