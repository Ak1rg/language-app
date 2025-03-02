import ModalNewWord from '@/modules/NavWords/components/ModalNewWord/ModalNewWord'
import NavWords from '@/modules/NavWords/NavWords'
import TagModal from '@/modules/Words/components/TagModal/TagModal'
import WordsModule from '@/modules/Words/WordsModule'
import WordsFilters from '@/modules/WordsFilters/WordsFilters'
import React from 'react'

const WordsPage = () => {
    return (
        <main className="bg-black flex flex-col gap-[20px] w-full h-[100vh] p-[20px] relative">
            <NavWords/>
            <WordsFilters/>
            <WordsModule/>

            <ModalNewWord/>
            <TagModal/>
        </main>
    )
}

export default WordsPage