import { useAppSelector } from '@/store/store'
import CustomArraySelect from '../CustomArraySelect/CustomArraySelect'

const TagsFilter = () => {

    const tags = useAppSelector(s => s.WordsFilters.tags)

    const actualTags = useAppSelector(s => s.WordsFilters.arrayFilters.tagFilter)

    return (
        <CustomArraySelect filterValue='tagFilter' filterName='Tags' array={tags} actualArray={actualTags}/>
    )
}

export default TagsFilter