import { useState } from "react"

export default function Search() {
    const [query, setQuery] = useState('pasta');

    return (
        <div>
            <input type="text" value={query} onChange={e => setQuery(e.target.value)} />

        </div>
    )
}