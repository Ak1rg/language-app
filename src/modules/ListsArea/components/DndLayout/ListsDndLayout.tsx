'use client';
import { closestCenter, DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext} from '@dnd-kit/sortable';
import { restrictToParentElement, restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/store';
import SkeletonBar from '../../../../ui/SkeletonBar/SkeletonBar';
import SortableNameList from '../SortableNameList/SortableNameList';
import { changeLists } from '../../store/listsAreaSlice';
import useRoutes from '@/hooks/useRoutes';

const ListsDndLayout = () => {

    const listsNames = useAppSelector(s => s.listsArea.listsNames)
    const routes = useRoutes()
    const [loading, setloading] = useState(true)
    const dispatch = useAppDispatch()

    const listsDraggableValue = useAppSelector(s => s.listsArea.listsDraggable)
    const [sortableList, setsortableList] = useState(listsNames)

    const sensors = useSensors(
        useSensor(PointerSensor),
    );

    const dragEnd = (event: any) => {
        const { active, over } = event;
        if (!over || active.id === over.id) {
            return; 
        }
        const oldIndex = sortableList.findIndex((item) => item === active.id);
        const newIndex = sortableList.findIndex((item) => item === over.id);
        const updatedList = [...sortableList];
        const [movedItem] = updatedList.splice(oldIndex, 1); 
        updatedList.splice(newIndex, 0, movedItem);
        setsortableList(updatedList);
    };

    useEffect(() => {
        if (!listsDraggableValue) {
            dispatch(changeLists(sortableList));
        }
    }, [listsDraggableValue, dispatch]);

    useEffect(() => {
        if (listsNames.length>0) {
            setloading(false); 
        }
        setsortableList(listsNames)
    },[listsNames])

    const listToRender = listsDraggableValue?sortableList:listsNames

    return (
        <DndContext 
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={dragEnd}
            modifiers={[restrictToVerticalAxis,restrictToParentElement]}
        >
            <SortableContext
                items={listToRender.map((listItem) => listItem)} 
                disabled={!listsDraggableValue}
            >
                {
                    loading?
                    Array(3).fill(0).map((_,i) => (
                        <SkeletonBar key={i} w={'100%'} h={'40px'}/>
                    ))
                    :
                    listsNames.map((e:string,i:number) => (
                        <SortableNameList key={i} routerName={`${routes.lists}${e.toLowerCase()}`} name={e}/>
                    ))
                }
            </SortableContext>
        </DndContext>
    )
}

export default ListsDndLayout