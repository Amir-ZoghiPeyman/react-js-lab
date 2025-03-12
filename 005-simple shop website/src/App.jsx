import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";
import SingleProductPage from "./pages/SingleProductPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import { useContext, useState } from "react";
import { createContext } from "react";

export const Context = createContext(null)

function App() {
  const [cart, setCart] = useState([{ id: 2, quantity: 4 }]);

  return (
    <>
    <Context.Provider value={{cart , setCart}}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/product/:id" element={<SingleProductPage />} />
            <Route
              path="/shopping/:id"
              element={<ShoppingCartPage/>}
            />
          </Routes>
        </BrowserRouter>
      </Layout>
      </Context.Provider>
    </>
  );
}

export default App;
