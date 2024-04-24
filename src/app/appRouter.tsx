import { createBrowserRouter } from "react-router-dom";
import { baseLayout } from "../layouts/baseLayout";
import HomePage from "@/pages/HomePage/HomePage";
import FavoritesPage from "@/pages/FavoritesPage/FavoritesPage";
import ProductPage from "@/pages/ProductPage/ProductPage";
import CartPage from "@/pages/CartPage/CartPage";

export const appRouter = () => (
  createBrowserRouter([
    {
      element: baseLayout,
      children: [
        {
          path: '/',
          element: <HomePage/>
        },
        {
          path: '/favorites',
          element: <FavoritesPage/>
        },
        {
          path: '/products/:productId',
          element: <ProductPage/>
        },
        {
          path: '/cart',
          element: <CartPage/>
        }
      ]
    }
  ])
)