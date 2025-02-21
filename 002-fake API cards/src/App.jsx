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
        <div className="m-10 gap-6 grid lg:grid-cols-4 md:grid-cols-2">
            {card.map(({ image, title, description, price }) => {
                return (
                    <Cards
                        image={image}
                        title={title}
                        description={description}
                        price={price}
                    />
                );
            })}
        </div>
    );
}
