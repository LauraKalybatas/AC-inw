import { useNavigate, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useContext, useState } from "react";
import { UserContext } from "../context/ContextoLogin";

export default function Header() {

    const { isLogged, setIsLogged } = useContext(UserContext)
    const navigate = useNavigate()

    const [search, setSearch] = useState('')

    function handleSearch(e) {
        setSearch(e.target.value)
        navigate(`/search/${e.target.value}`)
    }
    return (
        <header className="flex justify-around w-full h-28 items-center bg-[#2a2a2a]">
            <div className="flex flex-row">
                <h1 className="text-4xl font-bold mr-3">Lanniefy</h1>
            </div>
            <form className="relative">
            <input 
                type="text" 
                id="search" 
                className="rounded-full text-black w-96 h-10 indent-10 outline-none bg-[#FFFFFF] focus:outline-2 focus:outline-gray-50 transition-all duration-500 ease-in-out"
                placeholder="Pesquise seu artista favorito..." 
                value={search}
                onChange={handleSearch}
                onFocus={()=> navigate('search')}
                onBlur={()=> navigate('/')}/>
            <CiSearch className="absolute top-1/2 -translate-y-1/2 left-3 text-xl"/>
            </form>
            <nav className="flex gap-5 items-center">
                <NavLink to="/" className="text-2xl">Home</NavLink>
                <NavLink to="/tudo" className="text-2xl">Músicas</NavLink>
                <button 
                    className="text-xl font-medium bg-white rounded-full text-gray-900 px-4 py-2"
                    onClick={() => setIsLogged(!isLogged)}
                    >{isLogged? 'Logout' : 'Login'}
                </button>
            </nav>
        </header>
    )
}