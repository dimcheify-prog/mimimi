import CartProductsList from "../CartProductsList/CartProductsList";
import css from "./CartProductsBlock.module.css";
import { useAppSelector } from "@/store/appStore";

const CartProductsBlock = () => {
  const cartProducts = useAppSelector(state => state.cart.cartProducts);

  return (
    <div className={css.root}>
      {
        cartProducts.length
          ?
        <CartProductsList products={cartProducts}/>
          :
        <div>
          <p className={css.empty_cart_text}>Your cart is empty</p>
        </div>
      }
    </div>
  )
};

export default CartProductsBlock;