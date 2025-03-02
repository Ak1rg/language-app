'use client';
import { useParams } from 'next/navigation';

const useListParam = () => {
    const params = useParams();
    const listParam = params?.list;
    if (Array.isArray(listParam)) {
        return listParam[0];
    }
    return listParam ?? ''; 
};

export default useListParam;