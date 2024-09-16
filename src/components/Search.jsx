import { useEffect, useState } from "react"


const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "c7de2a6ec6694da2815572852430a37a";

export default function Search({ foodData, setFoodData }) {
    const [query, setQuery] = useState('pasta');
    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await res.json()
            console.log(data.results)
            setFoodData(data.results)
        }
        fetchFood()
    }, [query]);

    return (
        <div>
            <input type="text" value={query} onChange={e => setQuery(e.target.value)} />

        </div>
    )
}