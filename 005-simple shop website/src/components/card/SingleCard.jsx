import { Box } from "@mui/material";
import { useContext } from "react";
import { useMemo, React, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../../App";
import ShoppingIcon from "../ShoppingIcon/ShoppingIcon";


export default function SingleCard({ image, title, price, id, icon}) {
  const navigate = useNavigate();
  const location = useLocation();
  const test = useContext(Context);
  const {cart , setCart} = useContext(Context);
  console.log(test)

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
    setCart(prev => {
      if (prev.find(item => item.id === id)) {
        return prev.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        return [...prev, { id: id, quantity: 1 }];
      }
    })
  }

  function remove(evt) {
    evt.stopPropagation();
    setCart(prev => {
      if (prev.find(item => item.id === id)) {
        return prev.map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      } else {
        return [...prev, { id: id, quantity: 1 }];
      }
    })
  }



  return (
    <>
      <Box
        onClick={handleProduct}
        component="div"
        width="20rem"
        margin="5rem auto"
        boxShadow="0px 0px 10px 10px rgba(0,0,0,0.2)"
        padding="1.5rem"
        borderRadius="1rem"
      >
        <img src={image} alt="image" width="full" />
        <h2 className="mb-[1rem] font-bold mt-[3rem]">{title}</h2>
        <Box
          component="div"
          marginTop="1rem"
          display="flex"
          justifyContent="space-between"
        >
          <span>${price}</span>
        </Box>
        <div className="flex gap-1">
          <button
            onClick={remove}
            className="bg-red-400 px-2 py-0.5 rounded-md"
          >
            -
          </button>
          {/* {quantity ? quantity : 0} */}
          {quantity || 0}
          <button
            onClick={add}
            className="bg-green-400 px-2 py-0.5 rounded-md"
          >
            +
          </button>
        </div>
      </Box>
    </>
  );
}
