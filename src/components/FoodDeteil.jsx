import { useEffect, useState } from "react";

export default function FoodDeteil({ foodId }) {
    const [food, setFood] = useState({})
    const [isLoading, setIsLoading] = useEffect(true);

    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "a1dd02a130c94a13a7470cc12d3df4e3";
    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?apiKey=${API_KEY}`)
            const data = await res.json()
            console.log(data)
            setFood(data)
            IsLoading(false)
        }
        fetchFood()
    }, [foodId])
    return (
        <div>
            <div>
                <h1>{food.title}</h1>
                <img src={food.image} />
                <div>
                    <span>
                        <strong>⏰{food.readyInMinutes} Minutes</strong>
                        <span>
                            {food.vegeterian ? "🥒Vegeterian" : "🍖Non-Vegeterian"}
                        </span>
                        <span>
                            🏇<strong>Servers {food.servings}</strong>
                            <span>
                                {food.vegan ? "🐮 Vegan" : ''}
                            </span>
                        </span>
                    </span>
                </div>
            </div>
            <div>
                💲<span>{food.pricePerServing / 100} Per serving</span>
            </div>
            <div>
                {isLoading ? <p>Loading...</p> : food.analyzedInsructions[0].steps.map(step => (<li>{step.step}</li>))}
                <h2>Instructions</h2>

            </div>
        </div>
    )
}