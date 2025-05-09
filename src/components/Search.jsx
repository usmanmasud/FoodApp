import { useEffect, useState } from "react"
import styles from './search.module.css'


const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "7beabe23c9e042098c67bb01958d670c";

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