import useList from "@/modules/List/hooks/useList"
import { FC } from "react"
import { useDispatch } from "react-redux"
import useListParam from "@/modules/List/hooks/useListParam"
import { updateAchieve } from "../../store/ListsSlice"
import { IAchievement } from "../../store/ListsType"

interface IProps {
    itemName:string
}

const CheckInput:FC<IProps> = ({itemName}) => {

    const dispatch = useDispatch()
    const params = useListParam()
    const list = useList()

    const done = list?.find((e:IAchievement) => e.name === itemName)?.done

    const changeCheck = () => {
        dispatch(updateAchieve({itemName:itemName,listName:params}))
    }

    return (
        <div onClick={changeCheck} onPointerDown={(e) => e.stopPropagation()} className="border-solid border-white border-[1px] rounded-[2px] cursor-pointer">
            <svg className={`${!done&&'opacity-0'}`} xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>
            </svg>
        </div>
    )
}

export default CheckInput