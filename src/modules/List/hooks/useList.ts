'use client';

import { useAppSelector } from "@/store/store";
import useListParam from "./useListParam";
import { useMemo } from "react";

const useList = () => {
    const params = useListParam();
    const allLists = useAppSelector(s => s.lists.lists);

    const list = useMemo(() => {
        return allLists.find((item) => item.name === params)?.list;
    }, [allLists, params]);

    return list;
};

export default useList;