import WordModal from "./components/WordModal/WordModal"
import WordsModuleDndLayout from "./components/WordsModuleDndLayout/WordsModuleDndLayout"

const WordsModule = () => {

    return (
        <>
            <div className="relative h-[100vh] overflow-y-scroll scrollbar-hidden select-none">   
                <WordsModuleDndLayout/>
                <WordModal/>
            </div>
        </>
    )
}

export default WordsModule