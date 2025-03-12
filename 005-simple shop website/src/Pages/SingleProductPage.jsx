import { useNavigate, useParams } from "react-router-dom";
import SingleCard from "../components/card/SingleCard";
import { useEffect, useState } from "react";
import ShoppingIcon from "../components/ShoppingIcon/ShoppingIcon";

export default function SingleProductPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => response.json())
      .then((data) => setProductData(data));
  }, []);

  if (!productData) {
    return <h1>loading</h1>;
  }

  function handleShopping({ product }) {
    // let cart = JSON.parse(localStorage.getItem("shopping")) || [];
    // if(!Array.isArray(cart)){
    //   cart=[];
    // }
    // cart.push(product)
    // localStorage.setItem("Shopping",JSON.stringify(cart))
    // console.log(cart)
    navigate(`/shopping/${productData.id}`, { state: {} });
  }

  return (
    <>
      <SingleCard
        image={productData?.image}
        title={productData?.title}
        price={productData?.price}
        icon={<ShoppingIcon onClick={handleShopping} />}
      />
    </>
  );
}
