import { useEffect, useState } from "react";
import Cards from './components/cards/index.jsx';

export default function App() {
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => setCard(json));
    }, []);

    return (
        <div className="mt-8 md:grid md:gap-6 md:grid-cols-4">
            {card.map((card) => {
                const { title, price, description, image } = card;
                return (
                    <Cards
                        title={title}
                        price={price}
                        description={description}
                        image={image}
                    />
                );
            })}
        </div>
    );
}
