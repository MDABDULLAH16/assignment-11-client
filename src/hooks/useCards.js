import { useEffect, useState } from "react"

const useCards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])


    return [cards, setCards];
}

export default useCards;