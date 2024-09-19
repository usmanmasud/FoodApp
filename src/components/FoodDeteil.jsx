import { useEffect, useState } from "react";
import styles from './foodDeteils.module.css'
import ItemList from "./ItemList";


export default function FoodDeteil({ foodId }) {
    const [food, setFood] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "7beabe23c9e042098c67bb01958d670c";
    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?apiKey=${API_KEY}`)
            const data = await res.json()
            console.log(data)
            setFood(data)
            setIsLoading(false)
        }
        fetchFood()
    }, [foodId])
    return (
        <div>
            <div className={styles.recipeCard}>
                <h1 className={styles.recipeName}>{food.title}</h1>
                <img src={food.image} className={styles.recipeImage} />
                <div className={styles.recipeDeteils}>
                    <span>
                        <strong>⏰{food.readyInMinutes} Minutes</strong>
                    </span>
                    <span>
                        🏇<strong>Serves {food.servings}</strong>
                    </span>
                    <span>
                        <strong>{food.vegeterian ? "🥒Vegeterian" : "🍖Non-Vegeterian"}</strong>
                    </span>
                    <span>
                        <strong> {food.vegan ? "🐮 Vegan" : ''}</strong>
                    </span>
                </div>
                <div>
                    <strong>💲<span>{food.pricePerServing} Per serving</span></strong>
                </div>
                <h2>Incredients</h2>
                <ItemList food={food} isLoading={isLoading} />
                <h2>Instructions</h2>
                <div className={styles.recipeInstructions}>
                    <ol>
                        {isLoading ? <p>Loading...</p> : food.analyzedInstructions[0].steps.map(step => (<li>{step.step}</li>))}
                    </ol>
                </div>
            </div>
        </div>
    )
}