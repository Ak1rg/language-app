import { IWord } from "@/modules/Words/store/wordsType";
import orderFilterFunc from "../OrderFilterFunc";
import { useAppSelector } from "@/store/store";
import tagFilterFunc from "../TagFilter";

type FilterFunction = (list: IWord[]) => IWord[];

const applyFilters = (list: IWord[], filters: FilterFunction[]): IWord[] => {
    return filters.reduce((filteredList, filter) => filter(filteredList), list);
};

const useFiltersFunc = (list: IWord[]) => {
    const orderFilterSortingValue = useAppSelector(s => s.WordsFilters.selectFilters.orderFilter);
    const actualTags = useAppSelector(s => s.WordsFilters.arrayFilters.tagFilter);

    const orderFilter = (list: IWord[]) => orderFilterFunc(list, orderFilterSortingValue);
    const tagFilter = (list: IWord[]) => tagFilterFunc(list, actualTags);

    const filters = [tagFilter,orderFilter];
    return applyFilters(list, filters);

};

export default useFiltersFunc;