'use client';
import { closestCenter, DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext} from '@dnd-kit/sortable';
import { restrictToParentElement, restrictToVerticalAxis } from '@dnd-kit/modifiers';
import useListParam from '../../hooks/useListParam';
import { changeList} from '../../store/ListsSlice';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/store';
import SortableItem from '../SortableItem/SortableItem';
import SkeletonBar from '../../../../ui/SkeletonBar/SkeletonBar';
import { IAchievement } from '../../store/ListsType';

const DndLayout = ({list}:{list:IAchievement[]}) => {

    const dispatch = useAppDispatch()
    const listParam = useListParam()
    const [loading, setLoading] = useState(true);

    const draggableValue = useAppSelector(s => s.words.draggableValue)
    const [sortableList, setsortableList] = useState(list)

    const sensors = useSensors(
        useSensor(PointerSensor),
    );

    const dragEnd = (event: any) => {
        const { active, over } = event;
        if (!over || active.id === over.id) {
            return; 
        }
        const oldIndex = sortableList.findIndex((item) => item.name === active.id);
        const newIndex = sortableList.findIndex((item) => item.name === over.id);
        const updatedList = [...sortableList];
        const [movedItem] = updatedList.splice(oldIndex, 1); 
        updatedList.splice(newIndex, 0, movedItem);
        setsortableList(updatedList);
    };

    useEffect(() => {
        if (!draggableValue) {
            dispatch(changeList({ listName: listParam, list: sortableList }));
        }
    }, [draggableValue, dispatch]);

    useEffect(() => {
        if (list.length > 0) {
            setLoading(false); 
        }
        setsortableList(list)
    },[list])

    const listToRender = draggableValue?sortableList:list

    return (
        <DndContext 
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={dragEnd}
            modifiers={[restrictToVerticalAxis,restrictToParentElement]}
        >
            <SortableContext
                items={listToRender.map((listItem) => listItem.name)} 
                disabled={!draggableValue}
            >
                {
                    loading?
                        (
                            Array(3).fill(0).map((_,i) => (
                                <SkeletonBar key={i} w={'100%'} h={'41.5px'}/>
                            ))
                        )
                    :
                        (listToRender.map((sortItem) => (
                            <SortableItem key={sortItem.name} id={sortItem.name} item={sortItem} />
                        )))
                }
            </SortableContext>
        </DndContext>
    )
}

export default DndLayout
