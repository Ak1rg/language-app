import NavWordsAddWord from "./components/NavWordAddWord/NavWordsAddWord"
import NavWordsChange from "./components/NavWordsChange/NavWordsChange"

const NavWords = () => {
    return (
        <div className='flex items-center justify-between'>
            <h1 className="text-white font-[600] text-[50px] leading-[1]">Words</h1>
            <div className="flex items-center gap-[10px]">
                <NavWordsChange/>
                <NavWordsAddWord/>
            </div>
        </div>
    )
}

export default NavWords