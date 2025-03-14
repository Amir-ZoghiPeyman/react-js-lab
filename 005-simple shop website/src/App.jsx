import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import SingleProductPage from "./pages/SingleProductPage";

export const Context = createContext(null)

export default function App() {
  const [cart, setCart] = useState([{ id: 2, quantity: 4 }]);

  return (
    <>
      <Context.Provider value={{ cart, setCart }}>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<SingleProductPage />} />
              <Route
                path="/shopping/:id"
                element={<ShoppingCartPage />}
              />
            </Routes>
          </BrowserRouter>
        </Layout>
      </Context.Provider>
    </>
  );
}
