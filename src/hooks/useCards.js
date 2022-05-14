import { useEffect, useState } from "react"

const useCards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/food')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])


    return [cards, setCards];
}

export default useCards;