import css from "./CartIcon.module.css";
import { Link } from "react-router-dom";
import CartIconSvg from "@/assets/cart.svg";
import { useAppSelector } from "@/store/appStore";

const CartIcon = () => {
  const cartProducts = useAppSelector(state => state.cart.cartProducts);

  return (
    <Link to={'/cart'} className={css.root}>
        {
          cartProducts.length > 0 &&
          (<span className={css.cart_sticker}>{cartProducts.length}</span>)
        }
        <img src={CartIconSvg} alt="cart" />
      </Link>
  );
};

export default CartIcon;