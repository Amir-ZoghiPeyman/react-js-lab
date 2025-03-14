import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SingleCard from "../components/card/SingleCard";

export default function HomePage({ cart, setCart }) {
  const navigate = useNavigate();
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProduct(data));

    return () => {
      console.log("home page unmounted");
    };
  }, []);

  return (
    <div className="m-10 gap-6 grid lg:grid-cols-4 md:grid-cols-2">
      {products.map((item) => (
        <SingleCard
          id={item.id}
          key={item.id}
          cart={cart}
          setCart={setCart}
          title={item.title}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}
