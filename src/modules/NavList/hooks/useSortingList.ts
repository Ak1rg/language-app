import useList from "@/modules/List/hooks/useList";
import useListParam from "@/modules/List/hooks/useListParam";
import { changeList } from "@/modules/List/store/ListsSlice";
import { useAppDispatch} from "@/store/store";

const useSortingList = () => {

    const dispatch = useAppDispatch()
    const listToRender = useList()||[]
    const listName = useListParam()

    const doSortingList = (sortingValue:string) => {
        let sortedArray = [...listToRender]

        const getTime = (el:string) => {
            return el.split(":").reduce((acc, time) => 60 * acc + +time, 0)
        }

        switch (sortingValue) {
            case 'Newly':
                sortedArray.sort((a, b) => {
                    return getTime(b.createTime) - getTime(a.createTime); 
                })
                break
            case 'Oldest':
                sortedArray.sort((a, b) => {
                    return getTime(a.createTime) - getTime(b.createTime);  
                })
                break
            case 'Name A-Z':
                sortedArray.sort((a, b) => {
                    return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });  
                })
                break
            case 'Name Z-A':
                sortedArray.sort((a, b) => {
                    return b.name.localeCompare(a.name, undefined, { numeric: true, sensitivity: 'base' });  
                })
                break
        }
        dispatch(changeList({listName:listName,list:sortedArray}))
    }
    return doSortingList;
}

export default useSortingList