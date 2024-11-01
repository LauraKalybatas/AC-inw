import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SliderCards from "../components/SliderCards"
import Card from "../components/Card"

export default function SearchPage() {

    const { search } = useParams()
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        fetch(`https://localhost:3000/search${search}`)
        .then(response => response.json())
        .then(data => setSearchResults(data))
        .catch(error => console.log(error))
    }, [search])

    return (
         <div className="bg-[#d6a724] rounded-lg w-8/12 p-8">
            <SliderCards titulo="Resultados da busca">
            {
                searchResults.length > 0 ?
                    searchResults.map( resultado => (
                        <Card key={resultado._id} {...resultado}/>
                    ))
                :
                <h1 className="text-white text-xl mt-5">Artista não encontrado</h1>
            }
            </SliderCards>
        </div>
    )
}