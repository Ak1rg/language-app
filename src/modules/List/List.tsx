'use client';
import CompleteBar from './components/CompleteBar/CompleteBar';
import DndLayout from './components/DndLayout/DndLayout';
import NavList from '../NavList/NavList';
import useList from './hooks/useList';

const ListPage = () => {

    const list = useList() || []

    return (
        <main className="bg-black flex flex-col gap-[20px] w-full h-[100vh] p-[20px] ">
            <NavList/>
            <CompleteBar list={list}/>
            <div className="h-full flex flex-col gap-[20px] overflow-y-scroll scrollbar-hidden select-none">
                <DndLayout list={list}/>
            </div>
        </main>
    );
};

export default ListPage;