import React from 'react'
import OrderFilter from './components/OrderFilter/OrderFilter'
import TagsFilter from './components/TagsFilter/TagsFilter'

const WordsFilters = () => {

    return (
        <div className='flex items-center gap-[10px]'>
            <OrderFilter/>
            <TagsFilter/>
        </div>
    )
}

export default WordsFilters