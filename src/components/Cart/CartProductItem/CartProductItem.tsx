import { IProduct } from "@/models/Product";
import css from "./CartProductItem.module.css";
import { LikeButton, RemoveButton } from "@/shared/ui";
import { Button } from "@/shared/ui";
import { useAppSelector } from "@/store/appStore";
import { incrementProduct, decrementProduct } from "@/store/cart/cartSlice";
import { useAppDispatch } from "@/store/appStore";
import { USDFormat } from "@/shared/utils/currency";

interface CartProductItemProps {
  product: IProduct;
}

const CartProductItem = ({product}: CartProductItemProps) => {

  const dispatch = useAppDispatch();

  const productsCart = useAppSelector(state => state.cart.cartProducts);


  const handleIncrementCartProduct = () => {
    dispatch(incrementProduct(product));
  }

  const handleDecrementCartProduct = () => {
    const productNumber = productsCart.find(productItemSum => productItemSum.id === product.id)?.count;
    if (productNumber && productNumber > 1) {
      dispatch(decrementProduct(product));
    }
  }

  return (
    <div className={css.root}>
      
      <div className={css.product_image_wrapper}>
        <img className={css.product_image} src={product.image} alt="product image" />
      </div>
      <div className={css.title_buttons_block}>
        <p className={css.product_title}>{product.title}</p>
        <div className={css.buttons_box}>
          <LikeButton size="small" product={product}/>
          <RemoveButton size="small" product={product}/>
        </div>
      </div>
      <div className={css.product_price_wrapper}>
        {/* СЮДА */}
        <span className={css.product_price_text}>{USDFormat.format(product.price * (productsCart.find(productItemSum => productItemSum.id === product.id).count))}</span>
      </div>
      <div className={css.count_buttons}>
        <div className={css.count_button_box}>
          <Button size="medium" variant="secondary" onClick={handleDecrementCartProduct}>-</Button>
        </div>
        <span>{productsCart.find(productItemSum => productItemSum.id === product.id)?.count}</span>
        <div className={css.count_button_box} onClick={handleIncrementCartProduct}>
          <Button  size="medium" variant="secondary">+</Button>
        </div>
      </div>
    </div>
  );
};

export default CartProductItem;