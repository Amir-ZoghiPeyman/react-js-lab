import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home"
import About from "./pages/about";
import Products from "./pages/product";
import Dashboard from "./pages/dashboard";
import DashboardHome from "./pages/dashboardHome";
import Stats from "./pages/stats";
import NotFound from "./pages/notFound";


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/product/:id" element={<Products />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="stats" element={<Stats />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

