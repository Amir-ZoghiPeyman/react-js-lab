import { Box } from "@mui/material";
import { React, useContext, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../../App";

export default function SingleCard({ image, title, price, id, icon }) {
  const navigate = useNavigate();
  const location = useLocation();
  const test = useContext(Context);
  const { cart, setCart } = useContext(Context);

  function handleProduct() {
    if (location.pathname === "/product/:id") {
      return;
    } else {
      navigate(`/product/${id}`);
    }
  }
  const quantity = useMemo(() => {
    return cart?.find((item) => item.id === id)?.quantity;
  }, [cart]);

  function handleIncrease(evt) {
    evt.stopPropagation();
    alert("product added to cart");
  }

  function handleDecrease(evt) {
    evt.stopPropagation();
    alert("product removed from cart");
  }

  function add(evt) {
    evt.stopPropagation();
    const IsIncluded = cart.find((item) => item.id === id);

    if (IsIncluded) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, quantity: 1 }]);
    }

    console.log("cart", cart);
  }

  function remove(evt) {
    if (!quantity) return;

    if (quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      setCart(cart.filter((item) => item.id != id))
    }
  }

  return (
    <>
      <Box
        onClick={handleProduct}
        component="div"
        width="20rem"
        margin="1.5rem auto"
        boxShadow="0px 0px 10px 10px rgba(0,0,0,0.2)"
        padding="1.5rem"
        borderRadius="1rem"
        className="p-6 bg-white text-white border cursor-pointer border-gray-200 rounded-4xl shadow-2xl hover:bg-gray-700 dark:bg-gray-900 dark:border-gray-800 dark:hover:bg-gray-700 transition-all"
      >
        <img src={image} alt="image" width="full" className="aspect-square object-cover bg-gray-200 text-5xl rounded-4xl shadow-xl mr-6 p-4" />
        <h2 className="flex text-start lg:line-clamp-1 md:line-clamp-1 text-gray-700 dark:text-gray-400 mt-4">{title}</h2>
        <Box
          component="div"
          marginTop="1rem"
          display="flex"
          justifyContent="space-between"
          className="my-4"
        >
          <span>${price}</span>
        </Box>
        <div className="flex gap-1">
          <button
            onClick={(evt) => {
              evt.stopPropagation();
              if (quantity) remove();
            }}
            className="w-8 mr-2 bg-red-400 px-2 py-0.5 rounded-md cursor-pointer"
          >
            -
          </button>
          {/* {quantity ? quantity : 0} */}
          {quantity || "0"}
          <button onClick={add} className="w-8 ml-2 bg-green-400 px-2 py-0.5 rounded-md cursor-pointer">
            +
          </button>
        </div>
      </Box>
    </>
  );
}