import { createContext, useState } from "react";

export default function Cartcontext({ children }) {
    const cartcontext = createContext();
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart([...cart, product])
    }
    return (
        <Cartcontext />
    )

}