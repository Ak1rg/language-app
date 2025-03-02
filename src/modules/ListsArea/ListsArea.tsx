import ChangeDraggableListsButton from './components/ChangeDraggableLists/ChangeDraggableLists';
import ListsDndLayout from './components/DndLayout/ListsDndLayout';

const ListArea = () => {

    return (
        <main className='bg-black w-full h-[100vh] p-[20px] flex flex-col gap-[20px]'>
            <div className='flex justify-between items-center mb-[10px]'>
                <h1 className='text-white font-[600] text-[50px] leading-[1]'>Lists</h1>
                <div className='flex gap-[10px]'>
                    <ChangeDraggableListsButton/>
                    <button className='h-[35px] bg-grayBg rounded-[5px] px-[10px] text-white hover:bg-lightGrayBg duration-200'>Add List</button>
                </div>
            </div>
            <div className='flex flex-col gap-[20px]'>
                <ListsDndLayout/>
            </div>
        </main>
    )
}

export default ListArea