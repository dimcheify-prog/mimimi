import { IProduct } from "@/models/Product";
import { useAppSelector, useAppDispatch } from "@/store/appStore";
import { likeProduct } from "@/store/favorites/favoritesSlice";
import { SyntheticEvent, useState } from "react";

interface LikeProps {
  product: IProduct;
}

export const useLike = ({product}: LikeProps) => {
  const favoritesProducts = useAppSelector(state => state.favorites.products);
  const dispatch = useAppDispatch();

  // инициализируем стейт с булевым значением, проверяя присутствие товара в store.favorities
  const [isLiked, setIsLiked] = useState<boolean>(() => favoritesProducts.some(productItem => productItem.id === product.id));

  const handleToggleLike = (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLiked(prev => !prev);
    dispatch(likeProduct(product));
  }

  return {isLiked, handleToggleLike};
}