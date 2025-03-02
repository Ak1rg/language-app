import SkeletonBar from '../../../../ui/SkeletonBar/SkeletonBar';
import { useEffect, useState } from 'react';
import { IAchievement } from '../../store/ListsType';

const CompleteBar = ({list}:{list:IAchievement[]}) => {

    const [loading, setLoading] = useState(true);

    const hasTrailingZeros = (num: number, decimalPlaces: number = 1): boolean => {
        const [integerPart, fractionalPart] = num.toFixed(decimalPlaces).split('.');
        return fractionalPart === '0'.repeat(decimalPlaces);
    };

    const getLength = () => {
        const listLength = list?.length || 0
        const achieveDoneNum: number = list?.reduce((acc, achi) => {
            if (achi.done) {
                acc += 1;
            }
            return acc;
        }, 0) || 0;
        const percentage = listLength > 0 ? (achieveDoneNum / listLength) * 100 : 0;
        if(hasTrailingZeros(percentage)){
            return parseFloat(percentage.toFixed(0))
        } else {
            return parseFloat(percentage.toFixed(1))
        }
    }

    useEffect(() => {
        if (list!==undefined && list.length > 0) {
            setLoading(false); 
        }
    },[list])

    return (
        <div className='flex gap-[15px] items-center'>
            {   
                loading?
                (<SkeletonBar w={'100%'} h={'24px'}/>)
                :
                (<div className='w-full border-[1px] border-white border-solid rounded-[20px] h-[10px] overflow-hidden'>
                    <div 
                        className={`bg-[white] h-full transition-all duration-500`}
                        style={{ width: `${getLength()}%` }}
                    ></div>
                </div>)
            }
            <h4 className='text-white w-[50px] text-center select-none flex-shrink-0'>{loading?<SkeletonBar w={'100%'} h={'24px'}/>:`${getLength()} %`}</h4>
        </div>
    )
}

export default CompleteBar