import './SkeletonBar.css'

const SkeletonBar = ({w,h}:{w:string,h:string}) => {

    return (
        <div 
            style={{
                width:w,
                height:h,
            }} 
            className={`bg-grayBg rounded-[5px]`}
        >
            <div 
                style={{
                    width:w,
                    height:h,
                }} 
                className='w-full gradient-wave rounded-[5px]'>
            </div>
        </div>
    )
}

export default SkeletonBar