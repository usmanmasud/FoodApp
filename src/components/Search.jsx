import { useEffect, useState } from "react"
import styles from './search.module.css'


const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "a1dd02a130c94a13a7470cc12d3df4e3";

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
        <div className={styles.searchContainer}>
            <input type="text" value={query} onChange={e => setQuery(e.target.value)} className={styles.input} />

        </div>
    )
}