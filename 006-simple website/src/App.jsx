import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CSSTransition } from "react-transition-group";
import Home from "./pages/home"
import About from "./pages/about";
import Products from "./pages/product";
import Dashboard from "./pages/dashboard";
import DashboardHome from "./pages/dashboardHome";
import Stats from "./pages/stats";
import NotFound from "./pages/notFound";
import ProtectedRoute from "./components/protectedRoute";


export default function App() {
  const queryClient = new QueryClient();
  const Product = lazy(() => import("./components/product"))

  return (
    <>
      < QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<CSSTransition in={true} timeout={300} classNames="fade" unmountOnExit><About /></CSSTransition>} />
            <Route path="/product" element={<Suspense fallback={<div>2</div>}><Product /></Suspense>} />
            <Route path="/product/:id" element={<Products />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
              <Route index element={<DashboardHome />} />
              <Route path="stats" element={<Stats />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}