import { useState } from "react";
import { IProduct } from "@/models/Product";
import { useAppDispatch, useAppSelector } from "@/store/appStore";
import { SyntheticEvent } from "react";
import { addToCart, removeFromCart } from "@/store/cart/cartSlice";

interface CartProps {
  product: IProduct;
}

export const useCart = ({product}: CartProps) => {
  const dispatch = useAppDispatch();
  const productsInCart = useAppSelector(state => state.cart.cartProducts);

  const [isInCart, setIsInCart] = useState<boolean>(() => productsInCart.some(productInCart => productInCart.id === product.id));

  const handleAddToCart = (e: SyntheticEvent) => {
    e.preventDefault();
    setIsInCart(prev => !prev);
    dispatch(addToCart(product));
  }

  const handleRemoveFromCart = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(removeFromCart(product));
  }

  return {
    isInCart,
    handleAddToCart,
    handleRemoveFromCart
  }
}