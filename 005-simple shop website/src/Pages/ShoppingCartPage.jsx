import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import SingleCard from "../components/card/SingleCard";
import { useContext, useEffect, useState } from "react";
// import Cartcontext from "../components/CartContext/CartCntext";

export default function ShoppingCartPage({ cart }) {
  const params = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const Shop = JSON.parse(localStorage.getItem("shopping")) || [];
    setProductData(Shop);
  }, []);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("shopping", JSON.stringify(data));
        setProductData(data);
      });
  }, []);

  console.log(productData);

  if (!productData) {
    return <h1>loading</h1>;
  }

  return (
    <>
      <Box>
        <SingleCard
          cart={cart}
          image={productData?.image}
          title={productData?.title}
          price={productData?.price}
        />
      </Box>
    </>
  );
}
