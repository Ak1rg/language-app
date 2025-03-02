'use client';
import { closestCenter, DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext} from '@dnd-kit/sortable';
import { restrictToParentElement } from '@dnd-kit/modifiers';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/store';
import SkeletonBar from '../../../../ui/SkeletonBar/SkeletonBar';
import SortableWord from '../SortableWord/SortableWord';
import { changeWordsList } from '../../store/wordsSice';
import { IWord } from '../../store/wordsType';
import useFiltersFunc from '@/modules/WordsFilters/FiltersFunctions/FiltersFunc/FiltersFunc';

const WordsModuleDndLayout = () => {

    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(true);

    const wordsList = useAppSelector(s => s.words.wordsList)

    const FiltersFunc = useFiltersFunc(wordsList)

    const draggableValue = useAppSelector(s => s.words.draggableValue)
    const selectFilters = useAppSelector(s => s.WordsFilters.selectFilters)
    const arrayFilters = useAppSelector(s => s.WordsFilters.arrayFilters)
    const [filteredList, setfilteredList] = useState(FiltersFunc)
    const [sortableList, setsortableList] = useState(filteredList)


    const sensors = useSensors(
        useSensor(PointerSensor),
    );

    const dragEnd = (event: any) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;
        const oldIndex = sortableList.findIndex((item) => item.word === active.id);
        const newIndex = sortableList.findIndex((item) => item.word === over.id);
        if (oldIndex !== -1 && newIndex !== -1) {
            const updatedList = [...sortableList];
            const [movedItem] = updatedList.splice(oldIndex, 1);
            updatedList.splice(newIndex, 0, movedItem);
            setsortableList(updatedList);
        }
    };

    useEffect(() => {
        if (!draggableValue && wordsList.length > 0) {
            dispatch(changeWordsList(sortableList));
            setfilteredList(sortableList)
        }
    }, [draggableValue]);

    useEffect(() => {
        if (wordsList.length > 0) {
            setLoading(false); 
        }
        setsortableList(FiltersFunc)
    },[])

    useEffect(() => {
        setfilteredList(FiltersFunc)
        setsortableList(FiltersFunc)
    },[selectFilters,arrayFilters])

    const listToRender = draggableValue?sortableList:filteredList

    return (
        <DndContext 
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={dragEnd}
            modifiers={[restrictToParentElement]}
        >
            <SortableContext
                items={listToRender.map(e => e.word)} 
                disabled={!draggableValue}
            >
                <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-[10px]">
                    {loading?
                        Array(12).fill(0).map((_,i) => (
                            <SkeletonBar key={i} w={'w-full'} h={'41.7px'}/>
                        ))
                    :
                        listToRender.length===0?
                        <p className='text-white text-center mt-[50px] text-[40px]'>0 words</p>
                        :
                        listToRender.map((e:IWord) => (
                            <SortableWord word={e} key={e.word}/>
                        ))
                    }
                </div>
            </SortableContext>
        </DndContext>
    )
}

export default WordsModuleDndLayout